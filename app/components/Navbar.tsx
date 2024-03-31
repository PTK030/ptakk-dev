"use client"
import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
    const [isLockedScreen, setIsLockedScreen] = useState<boolean>(true);
    const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false)

    useEffect(() => {
        const scrollY: number = window.scrollY;
        const innerWidth: number = window.innerWidth;
        window.addEventListener("scroll", setShadow)
    }, [])

    const useMenu = () => {
        if (innerWidth <= 1105 && typeof innerWidth  != undefined) {
            setIsActiveButton(prevState => !prevState);
            setIsLockedScreen(true);
            updateBodyClass();
        }
    };

    const useBurgerMenu = () => {
        setIsActiveButton(prevState => !prevState);
        setIsLockedScreen(prevState => !prevState);
        updateBodyClass();
    };

    const updateBodyClass = () => {
        if (isLockedScreen) {
            document.body.classList.add('locked');
        } else {
            document.body.classList.remove('locked');
        }
    };

    const setShadow = () => {
        if(scrollY >= 235 && typeof scrollY != undefined){
            setIsScrolledDown(true)
        }
        else{
            setIsScrolledDown(false)
        }
    }

    return (
    <nav className={`navbar navbar--${isScrolledDown ? "shadow" : ""}`}>
        <div className="navbar_logo-box">
            <FontAwesomeIcon icon={faSpider} style={{color: '#00839f', width: "40px", height: "40px"}}/>
            <h1 className="navbar_logo">CodeWeb Solution </h1>
        </div>
        <button className="navbar_burger-button" onClick={useBurgerMenu}>
          <div className="navbar_burger-button_box">
            <div className={`navbar_burger-button_box-line ${isActiveButton ? 'navbar_burger-button_box-line-firstactive' : ''}`}/>
            <div className={`navbar_burger-button_box-line ${isActiveButton ? 'navbar_burger-button_box-line-secondactive' : ''}`}/>
            <div className={`navbar_burger-button_box-line ${isActiveButton ? 'navbar_burger-button_box-line-thirdactive' : ''}`}/>
          </div>
        </button>
        <menu className={`navbar_menu animate__animated ${isActiveButton ? 'navbar_menu--active' : ''}`}>
            <a href="#home" className='navbar_menu-redirect' onClick={useMenu}>home</a>
            <a href="#aboutme" className='navbar_menu-redirect' onClick={useMenu}>o mnie</a>
            <a href="#skills" className='navbar_menu-redirect' onClick={useMenu}>umiejętności</a>
            <a href="#projects" className='navbar_menu-redirect' onClick={useMenu}>projekty</a>
            <a href="#contact" className='navbar_menu-redirect' onClick={useMenu}>kontakt</a>
        </menu>
    </nav>
  )
}

export default Navbar