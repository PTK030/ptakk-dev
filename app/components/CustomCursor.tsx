"use client";
import React, { useEffect, useRef, useState } from 'react';

const TRAIL_COUNT = 6;
const TRAIL_LERP = 0.35;

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
    const trailPositions = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 })));
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // Using refs for animation loop variables to avoid re-renders
    const mouse = useRef({ x: -100, y: -100 });
    const cursor = useRef({ x: -100, y: -100 });
    const hoverState = useRef({
        isHovered: false,
        isMagnetic: false,
        el: null as HTMLElement | null,
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Apply magnetic pull only if the element is marked as magnetic
            if (hoverState.current.isHovered && hoverState.current.isMagnetic && hoverState.current.el) {
                const el = hoverState.current.el;
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;

                // Pull element slightly towards mouse (15% distance)
                el.style.transform = `translate(${distanceX * 0.15}px, ${distanceY * 0.15}px)`;
            }
        };

        const onMouseLeave = () => setIsHidden(true);
        const onMouseEnter = () => {
            // Don't show the custom cursor if a modal overlay (e.g. Calendly) is active
            const calendlyActive = document.querySelector('.calendly-overlay');
            if (!calendlyActive) {
                setIsHidden(false);
            }
        };

        const onMouseOverTargets = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Find closest clickable element
            const link = target.closest('a') || target.closest('button');

            if (link || window.getComputedStyle(target).cursor === 'pointer' || target.classList.contains('magnetic')) {
                const element = (link || target) as HTMLElement;

                const rect = element.getBoundingClientRect();

                // Determine if element should actually be magnetic (pulling) vs just hover-enlarging
                const isExplicitlyMagnetic = target.classList.contains('magnetic');
                // Auto-magnetic for small buttons/links, but skip for wide blocks like FAQ accordions
                const isMagnetic = isExplicitlyMagnetic || (rect.width < 250 && rect.height < 100);

                hoverState.current = {
                    isHovered: true,
                    isMagnetic: isMagnetic,
                    el: element,
                    width: rect.width,
                    height: rect.height,
                    // calculate static center on enter
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };

                if (isMagnetic) {
                    // Smoothly prepare the element for transform
                    element.style.transition = 'transform 0.1s ease-out';
                }

                if (cursorRef.current) {
                    cursorRef.current.classList.add('cursor-magnetic-active');
                    if (!isMagnetic) {
                        // If not magnetic, disable the pulsing jumping effect
                        cursorRef.current.classList.add('cursor-hover-only');
                    }
                }
            } else {
                resetHoverState();
            }
        };

        const resetHoverState = () => {
            if (hoverState.current.el && hoverState.current.isMagnetic) {
                // Ensure the element snaps back smoothly
                hoverState.current.el.style.transform = 'translate(0px, 0px)';
                setTimeout(() => {
                    if (hoverState.current.el && !hoverState.current.isHovered) {
                        hoverState.current.el.style.transform = '';
                        hoverState.current.el.style.transition = '';
                    }
                }, 200);
            }
            hoverState.current.isHovered = false;
            hoverState.current.isMagnetic = false;
            hoverState.current.el = null;
            if (cursorRef.current) {
                cursorRef.current.classList.remove('cursor-magnetic-active');
                cursorRef.current.classList.remove('cursor-hover-only');
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseover', onMouseOverTargets);

        let animationFrameId: number;

        const render = () => {
            let targetX = mouse.current.x;
            let targetY = mouse.current.y;

            if (hoverState.current.isHovered && hoverState.current.isMagnetic && hoverState.current.el) {
                // Cursor sticks to the center of the hovered element, but follows mouse slightly for parallax
                const distanceX = mouse.current.x - hoverState.current.x;
                const distanceY = mouse.current.y - hoverState.current.y;
                targetX = hoverState.current.x + distanceX * 0.1;
                targetY = hoverState.current.y + distanceY * 0.1;
            }

            // Interpolation for silky smooth cursor movement
            cursor.current.x += (targetX - cursor.current.x) * 0.15;
            cursor.current.y += (targetY - cursor.current.y) * 0.15;

            if (cursorRef.current) {
                if (hoverState.current.isHovered) {
                    // When stuck, apply pulsing CSS animation which has its own transform, so we use left/top or wrap it
                    // To not override scaling from CSS animation in active state, we just set position
                    cursorRef.current.style.transform = `translate(${cursor.current.x}px, ${cursor.current.y}px) translate(-50%, -50%)`;
                } else {
                    cursorRef.current.style.transform = `translate(${cursor.current.x}px, ${cursor.current.y}px) translate(-50%, -50%) scale(1)`;
                }
            }

            // Update trail positions - each follows the previous
            for (let i = 0; i < TRAIL_COUNT; i++) {
                const leader = i === 0 ? cursor.current : trailPositions.current[i - 1];
                const tp = trailPositions.current[i];
                tp.x += (leader.x - tp.x) * TRAIL_LERP;
                tp.y += (leader.y - tp.y) * TRAIL_LERP;

                const trailEl = trailRefs.current[i];
                if (trailEl) {
                    trailEl.style.transform = `translate(${tp.x}px, ${tp.y}px) translate(-50%, -50%)`;
                    // Hide trail during hover state
                    trailEl.style.opacity = hoverState.current.isHovered ? '0' : '';
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseover', onMouseOverTargets);
            cancelAnimationFrame(animationFrameId);
            resetHoverState();
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {Array.from({ length: TRAIL_COUNT }, (_, i) => (
                <div
                    key={`trail-${i}`}
                    ref={el => { trailRefs.current[i] = el; }}
                    className={`cursor-trail cursor-trail--${i} ${isHidden ? 'magnetic-cursor--hidden' : ''}`}
                />
            ))}
            <div
                ref={cursorRef}
                className={`magnetic-cursor ${isHidden ? 'magnetic-cursor--hidden' : ''}`}
            />
        </>
    );
};

export default CustomCursor;
