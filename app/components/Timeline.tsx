import React from 'react'
import Image from 'next/image'
import { FaGamepad, FaGlobe } from 'react-icons/fa'
import { SiMotorola } from 'react-icons/si'
import { IbmLogo } from './IbmLogo'

const timelineData = [
    {
        icon: <FaGamepad />,
        number: '01',
        title: 'Początki',
        desc: 'Pierwsze gry i wiersze kodu w wieku 11 lat. Pasja, która stała się czymś więcej niż hobby.',
        image: '/1.png',
        side: 'left'
    },
    {
        icon: <FaGlobe />,
        number: '02',
        title: 'Era Web Dev',
        desc: 'Pełne zanurzenie w technologiach – setki tysięcy linii kodu i pierwsze projekty komercyjne.',
        image: '/2.jpg',
        side: 'right'
    },
    {
        icon: <SiMotorola />,
        number: '03',
        title: 'RegioSkills & Motorola',
        desc: 'Wygrana w ogólnopolskim konkursie zawodowym oraz płatny staż komercyjny w Motorola Solutions.',
        image: '/3.jpg',
        side: 'left'
    },
    {
        icon: <IbmLogo style={{ width: '2.2rem', height: '1.5rem' }} />,
        number: '04',
        title: 'IBM',
        desc: 'Współpraca przy innowacyjnych projektach na poziomie korporacyjnym z jedną z największych firm tech.',
        image: '/4.JPG',
        side: 'right'
    },
];

const Timeline = () => {
    return (
        <section className='timeline' id='timeline'>
            <div className="timeline__glow"></div>
            
            <div className="timeline_container">
                <header className="timeline_header" data-aos="fade-down">
                    <span className="timeline_eyebrow">Historia</span>
                    <h2 className="timeline_heading">Moja <span>Droga</span></h2>
                </header>

                <div className="timeline_journey">
                    {/* The glowing spine */}
                    <div className="timeline_spine"></div>

                    {timelineData.map((step, index) => (
                        <div 
                            key={index} 
                            className={`timeline_item timeline_item--${step.side}`}
                            data-aos={step.side === 'left' ? 'fade-right' : 'fade-left'}
                        >
                            <div className="timeline_card">
                                <div className="timeline_card-top">
                                    <div className="timeline_card-number">{step.number}</div>
                                    <div className="timeline_card-icon-wrap">
                                        <span className="timeline_card-icon">{step.icon}</span>
                                    </div>
                                </div>
                                <h3 className="timeline_card-title">{step.title}</h3>
                                <p className="timeline_card-desc">{step.desc}</p>
                            </div>

                            <div className="timeline_visual">
                                <div className="timeline_visual-glow"></div>
                                <Image 
                                    src={step.image} 
                                    alt={step.title} 
                                    width={600} 
                                    height={450} 
                                    className="timeline_visual-img"
                                    style={{ width: '100%', height: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                                />
                            </div>
                            
                            {/* Dot on the spine */}
                            <div className="timeline_dot">
                                <div className="timeline_dot-inner"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
