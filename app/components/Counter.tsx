"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
    end: number;
    suffix?: string;
    duration?: number;
}

const CountUp = ({ end, suffix = "", duration = 2 }: CountUpProps) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(0, end, {
                duration: duration,
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(value).toString();
                    }
                },
            });
            return () => controls.stop();
        }
    }, [inView, end, duration]);

    return (
        <div className="counter_number-box">
            <span ref={nodeRef} className="counter_number">0</span>
            <span className="counter_suffix">{suffix}</span>
        </div>
    );
};

const Counter = () => {
    const stats = [
        { value: 5, suffix: "+", label: "Lat doświadczenia" },
        { value: 30, suffix: "+", label: "Wdrożonych projektów" },
        { value: 100, suffix: "%", label: "Zadowolonych klientów" }
    ];

    return (
        <div className="counter" id="stats">
            <div className="counter_container">
                {stats.map((stat, index) => (
                    <div className="counter_item" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                        <CountUp end={stat.value} suffix={stat.suffix} />
                        <span className="counter_label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;
