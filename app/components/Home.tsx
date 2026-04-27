"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home_content" data-aos="fade-up"
        data-aos-duration="1000">
        <p className="home_content-heading home_content-heading-name">Portfolio</p>
        <h2 className="home_content-heading home_content-heading-main">Kamil Ptak</h2>
        <h2 className="home_content-heading home_content-heading-occupation">
          <TypeAnimation
            sequence={[
              "Full-stack Developer",
              2000,
              "UI/UX Designer",
              2000,
              "Freelancer",
              2000
            ]}
            speed={50}
            repeat={Infinity}
            style={{ color: '#3b82f6' }} />
        </h2>
        <p className="home_content-heading home_content-heading-description">
          Tworzę nowoczesne aplikacje internetowe, które miażdżą konkurencję i realnie skalują Twój biznes.
        </p>
        <div className="home_content-box">
          <a href='#projects' className='home_content-box-button'>
            Zobacz projekty <FontAwesomeIcon icon={faAnglesRight} style={{ width: "14px", height: "14px" }} />
          </a>
        </div>
      </div>
      <div className="home_img" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
        <Image src="/memoji.png" alt="Kamil Ptak Memoji" height={200} width={200} />
      </div>
      <a href="#stats">
        <FontAwesomeIcon icon={faAngleDown} beat className='home_arrow-down' />
      </a>
    </section>
  )
}

export default Home
