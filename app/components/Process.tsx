'use client';

import React, { useEffect, useRef } from 'react'
import { FiTarget, FiEdit3, FiCode } from 'react-icons/fi'
import { SlRocket } from 'react-icons/sl'

const processData = [
    {
        icon: <FiTarget />,
        number: '01',
        title: 'Analiza & Strategia',
        desc: 'Poznaję Twój biznes, cele i problemy. Wspólnie ustalamy architekturę, która przyniesie realne zyski.',
    },
    {
        icon: <FiEdit3 />,
        number: '02',
        title: 'UX/UI & Prototyp',
        desc: 'Projektuję nowoczesny interfejs. Skupiam się na konwersji i intuicyjności dla końcowego użytkownika.',
    },
    {
        icon: <FiCode />,
        number: '03',
        title: 'Full-Stack Development',
        desc: 'Błyskawicznie wdrażam projekt w życie używając najnowszych i najszybszych technologii IT.',
    },
    {
        icon: <SlRocket />,
        number: '04',
        title: 'Premiera & Skalowanie',
        desc: 'Zaczynamy zarabiać. Monitoruję działanie aplikacji, optymalizuję SEO i wdrażam nowe funkcje.',
    },
];

const Process = () => {
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cardsRef.current) return;
            const cards = cardsRef.current.getElementsByClassName("process_cinematic-card");
            for (const card of Array.from(cards)) {
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
                (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
            }
        };

        const currentRef = cardsRef.current;
        if (currentRef) {
            currentRef.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <section className='process' id='process'>
            <div className="process__bg-ambient"></div>
            
            <div className="process_container">
                <header className="process_header" data-aos="fade-down">
                    <div className="process_eyebrow">
                        Mój proces
                    </div>
                    <h2 className="process_heading">Jak <span>pracuję</span></h2>
                    <p className="process_subtitle">
                        Zero zgadywania. Przewidywalny, zwinny proces, dzięki któremu Twoja wizja
                        zmienia się w zarabiający produkt w rekordowym czasie.
                    </p>
                </header>

                <div className="process_cinematic-wrapper" ref={cardsRef}>
                    {processData.map((step, index) => (
                        <div 
                            key={index} 
                            className="process_cinematic-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Card Content Wrapper */}
                            <div className="process_cinematic-content">
                                <div className="process_cinematic-number">{step.number}</div>
                                
                                <div className="process_cinematic-icon-box">
                                    {step.icon}
                                </div>
                                <h3 className="process_cinematic-title">{step.title}</h3>
                                <p className="process_cinematic-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
