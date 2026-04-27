"use client";

import React from 'react';
import { projects } from '@/app/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProjectSlider from '@/app/components/ProjectSlider';
import { motion } from 'framer-motion';
import CustomCursor from '@/app/components/CustomCursor';

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = React.use(params);
    const project = projects.find(p => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <>
            <CustomCursor />
            <Navbar forceSolid={true} />
            <motion.main
                className="project-details"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="project-details_container">

                    <div className="project-details_header">
                        <Link href="/#projects" className="project-details_back-btn">
                            &larr; Powrót do projektów
                        </Link>
                        <span className="project-details_category">{project.category}</span>
                        <h1 className="project-details_title">{project.title}</h1>
                    </div>

                    <ProjectSlider images={project.sliderImages} />

                    <div className="project-details_content">
                        <motion.div
                            className="project-details_left"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="project-details_subtitle">O projekcie</h2>
                            <p className="project-details_description">{project.longDescription}</p>

                            <h2 className="project-details_subtitle">Kluczowe cechy</h2>
                            <ul className="project-details_features">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="project-details_right"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="project-details_tech-card">
                                <h3>Technologie</h3>
                                <div className="project-details_tech-list">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="projects_tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-details_links-card">
                                <h3>Linki</h3>
                                <div className="project-details_actions">
                                    {project.preview !== "#" && (
                                        <a href={project.preview} target="_blank" rel="noopener noreferrer" className="projects_btn">Zobacz Live Preview</a>
                                    )}
                                    {project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects_btn projects_btn--outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px', display: 'inline' }}>
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                            Kod Źródłowy GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.main>
            <Footer />
        </>
    );
}
