"use client"
import { useEffect, useCallback } from 'react';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (opts: { url: string }) => void;
            showPopupWidget: (url: string) => void;
        };
    }
}

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/xkamilptx/30min';

const lockScroll = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
};

const hideCursor = () => {
    const cursor = document.querySelector('.magnetic-cursor') as HTMLElement;
    if (cursor) cursor.style.display = 'none';
    document.body.classList.add('calendly-active');
};

const showCursor = () => {
    const cursor = document.querySelector('.magnetic-cursor') as HTMLElement;
    if (cursor) {
        cursor.style.display = '';
        cursor.classList.remove('magnetic-cursor--hidden');
    }
    document.body.classList.remove('calendly-active');
    document.dispatchEvent(new MouseEvent('mouseenter'));
};

export function useCalendly() {
    useEffect(() => {
        if (!document.getElementById('calendly-script')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            document.head.appendChild(link);

            const script = document.createElement('script');
            script.id = 'calendly-script';
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const watchForClose = useCallback(() => {
        let appeared = false;

        const interval = setInterval(() => {
            const overlay = document.querySelector('.calendly-overlay');

            if (!appeared) {
                if (overlay) {
                    appeared = true;
                }
            } else {
                if (!overlay) {
                    unlockScroll();
                    showCursor();
                    clearInterval(interval);
                }
            }
        }, 200);
    }, []);

    const openCalendly = useCallback(() => {
        lockScroll();
        hideCursor();

        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
            watchForClose();
        } else {
            unlockScroll();
            showCursor();
            window.open(CALENDLY_URL, '_blank');
        }
    }, [watchForClose]);

    return { openCalendly };
}

export { CALENDLY_URL };
