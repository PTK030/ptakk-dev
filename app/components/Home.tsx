"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";


const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home_content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
            <p className="home_content-heading home_content-heading-name">Cześć, mam na imię</p>
            <h2 className="home_content-heading home_content-heading-main">Kamil Ptak</h2>
            <h2 className="home_content-heading home_content-heading-occupation">Jestem 
                <TypeAnimation
                sequence={[
                    " Front-end Developerem",
                    1000,
                    ""
                ]}
                speed={20}
                repeat={Infinity}
                style={{color: '#00839f'}}/>
            </h2>
            <p className="home_content-heading home_content-heading-description">
              Jestem młodym Front-end Developerem, który szuka wyzwań. Czasami, okazjonalnie lubię coś zaprojektować 😅 <br />
              Obecnie skupiam się na poszerzeniu swoich kompetencji w Backendzie
            </p>
            <div className="home_content-box">
              <a href='#projects' className='home_content-box-button'>
                Zobacz projekty <FontAwesomeIcon icon={faAnglesRight} style={{width: "10px", height: "10px"}}/>
              </a>
            </div>
        </div>
        <div className="home_img" data-aos="fade-up"
     data-aos-duration="3000">
          <Image src="/memoji.png" alt="chłopiec mrugający okiem" height={250} width={250}/>
        </div>
        <a href="#aboutme">
          <FontAwesomeIcon icon={faAngleDown} beat className='home_arrow-down'/>
        </a>
    </section>
  )
}

export default Home