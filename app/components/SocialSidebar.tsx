"use client"
import React, { useState } from 'react';
import { FiGithub, FiMail, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useCalendly } from '@/app/hooks/useCalendly';

const links = [
    {
        href: 'https://github.com/PTK030',
        label: 'GitHub',
        icon: <FiGithub />,
        tooltip: 'GitHub',
    },

    {
        href: 'mailto:ptakk.dev@icloud.com',
        label: 'Email',
        icon: <FiMail />,
        tooltip: 'Email',
    },
];

const SocialSidebar = () => {
    const { openCalendly } = useCalendly();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`social-sidebar ${collapsed ? 'social-sidebar--collapsed' : ''}`}>
            <div className="social-sidebar_line social-sidebar_line--top" />
            <div className="social-sidebar_links">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="social-sidebar_link"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        aria-label={link.label}
                    >
                        {link.icon}
                        <span className="social-sidebar_tooltip">{link.tooltip}</span>
                    </a>
                ))}
                <button
                    className="social-sidebar_link"
                    onClick={openCalendly}
                    aria-label="Umów spotkanie"
                >
                    <FiCalendar />
                    <span className="social-sidebar_tooltip">Umów spotkanie</span>
                </button>
            </div>
            <div className="social-sidebar_line social-sidebar_line--bottom" />
            <button
                className="social-sidebar_toggle"
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? 'Pokaż pasek' : 'Ukryj pasek'}
            >
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </button>
        </aside>
    );
};

export default SocialSidebar;
