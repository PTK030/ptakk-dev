"use client"
import React, { useEffect, useState } from 'react'
import { FiCode } from 'react-icons/fi'

const Navbar = ({ forceSolid = false }: { forceSolid?: boolean }) => {
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
    const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 235) {
                setIsScrolledDown(true)
            }
            else {
                setIsScrolledDown(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        if (isActiveButton) {
            // Calculate scrollbar width
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            
            if (scrollbarWidth > 0) {
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                if (navbar) {
                    // Get current padding to preserve responsive design
                    const currentPadding = window.getComputedStyle(navbar).paddingRight;
                    navbar.style.paddingRight = `calc(${currentPadding} + ${scrollbarWidth}px)`;
                }
            }
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            if (navbar) {
                navbar.style.paddingRight = '';
            }
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            if (navbar) {
                navbar.style.paddingRight = '';
            }
        };
    }, [isActiveButton]);

    const closeMenu = () => {
        if (window.innerWidth <= 1104) {
            setIsActiveButton(false);
        }
    };

    const toggleMenu = () => {
        setIsActiveButton(prev => !prev);
    };

    return (
        <nav className={`navbar ${(isScrolledDown || forceSolid) ? "navbar--scrolled" : ""}`}>
            <div className="navbar_container">
                <div className="navbar_logo-box">
                    <FiCode className="navbar_logo-icon" />
                    <h1 className="navbar_logo">PTAKK</h1>
                </div>
                
                <menu className={`navbar_menu ${isActiveButton ? 'navbar_menu--active' : ''}`}>
                    <a href="/#home" className='navbar_menu-link' onClick={closeMenu}>Home</a>
                    <a href="/#aboutme" className='navbar_menu-link' onClick={closeMenu}>O mnie</a>
                    <a href="/#skills" className='navbar_menu-link' onClick={closeMenu}>Umiejętności</a>
                    <a href="/#projects" className='navbar_menu-link' onClick={closeMenu}>Projekty</a>
                    <a href="/#contact" className='navbar_menu-link navbar_menu-link--special' onClick={closeMenu}>Kontakt</a>
                </menu>

                <button className="navbar_burger-button" onClick={toggleMenu} aria-label="Toggle menu">
                    <div className="navbar_burger-button_box">
                        <div className={`navbar_burger-button_box-line ${isActiveButton ? 'navbar_burger-button_box-line-firstactive' : ''}`} />
                        <div className={`navbar_burger-button_box-line ${isActiveButton ? 'navbar_burger-button_box-line-secondactive' : ''}`} />
                        <div className={`navbar_burger-button_box-line ${isActiveButton ? 'navbar_burger-button_box-line-thirdactive' : ''}`} />
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
