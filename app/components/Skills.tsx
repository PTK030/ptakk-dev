import React from 'react'
import Image from "next/image"

const skillsData = [
    {
        name: 'Next JS', img: '/nextjs.png', color: '#ffffff',
        desc: 'Tworzenie błyskawicznych, zoptymalizowanych pod SEO aplikacji z Server-Side Rendering.',
        tags: ['App Router', 'Server Actions', 'SSR & SSG', 'API Routes']
    },
    {
        name: 'React Native Expo', img: '/react.png', color: '#ffffff',
        desc: 'Tworzenie cross-platformowych, natywnych aplikacji mobilnych dla iOS i Androida.',
        tags: ['Mobile Dev', 'Cross-Platform', 'React Native', 'Expo Router']
    },
    {
        name: 'Typescript', img: '/typescript.png', color: '#3178c6',
        desc: 'Pisanie wydajniejszego, wolnego od błędów kodu dzięki bezpiecznemu typowaniu.',
        tags: ['Interfaces', 'Generics', 'Type Safety', 'Utility Types']
    },
    {
        name: 'Mongo DB', img: '/mongo.png', color: '#47a248',
        desc: 'Projektowanie i zarządzanie elastycznymi, nowoczesnymi bazami danych NoSQL.',
        tags: ['Mongoose', 'Aggregations', 'Indexing', 'NoSQL']
    },
    {
        name: 'PostgreSQL', img: '/postgresql.png', color: '#336791',
        desc: 'Tworzenie zaawansowanych, w pełni relacyjnych struktur baz danych dla dużych systemów.',
        tags: ['Relational DB', 'SQL', 'Triggers', 'Complex Queries']
    },
    {
        name: 'Tailwind CSS', img: '/tailwind.png', color: '#38b2ac',
        desc: 'Błyskawiczne stylowanie zaawansowanych i responsywnych widowków Utility-First.',
        tags: ['Utility-First', 'Custom Config', 'Responsive', 'Plugins']
    },
    {
        name: 'Django', img: '/django.svg', color: '#092e20',
        desc: 'Solidne, bezpieczne back-endy i interfejsy API tworzone z użyciem potęgi języka Python.',
        tags: ['Python', 'ORM', 'Security', 'REST API']
    },
    {
        name: 'GitHub', img: '/github.png', color: '#ffffff',
        desc: 'Zarządzanie architekturą kodu źródłowego, optymalizacja i wersjonowanie.',
        tags: ['Git Flow', 'CI/CD Actions', 'Code Review', 'Version Control']
    },
];

const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <div className="skills_container">
                <div className="skills_grid">

                    {/* LEWA STRONA: Content (Nagłówki na wzór Aboutme) */}
                    <div className="skills_content" data-aos="fade-right">
                        <div className="skills_eyebrow">Stack</div>
                        
                        <h2 className="skills_title">
                            Moje <span>Umiejętności</span>
                        </h2>

                        <div className="skills_description">
                            <p>
                                Nie ograniczam się do jednego narzędzia. Dobieram technologię pod konkretny problem biznesowy, stawiając na maksymalną wydajność, bezpieczeństwo i nowoczesne standardy kodu.
                            </p>
                            <p style={{ marginTop: '20px' }}>
                                Poniżej znajdziesz mój zaufany, codzienny stack technologiczny, w którym czuję się jak ryba w wodzie. 
                            </p>
                        </div>
                    </div>

                    {/* PRAWA STRONA: Siatka Kart (Na wzór wizualnej strony w Aboutme) */}
                    <div className="skills_visual" data-aos="fade-left">
                        <div className="skills_wrapper">
                            {skillsData.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skills_wrapper_box"
                                    data-aos="fade-up"
                                    data-aos-delay={`${index * 50}`}
                                    style={{ '--hover-color': skill.color } as React.CSSProperties}
                                >
                                    <div className="skills_wrapper_box-header">
                                        <Image 
                                            src={skill.img} 
                                            alt={`${skill.name} icon`} 
                                            className='skills_wrapper_box-header_img' 
                                            width={45} 
                                            height={45} 
                                            style={skill.name === 'Django' ? { filter: 'brightness(0) invert(1)' } : undefined}
                                        />
                                        <h3 className="skills_wrapper_box-header_name">{skill.name}</h3>
                                    </div>
                                    <p className="skills_wrapper_box-desc">{skill.desc}</p>
                                    <div className="skills_wrapper_box-tags">
                                        {skill.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="skills_wrapper_box-tags_item">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills