import React from 'react';
import Link from 'next/link';
import { projects } from '@/app/data/projects';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className="projects_container">
        
        {/* Centered Cinematic Header */}
        <header className="projects_header" data-aos="fade-down">
          <div className="projects_eyebrow">Portfolio</div>
          <h2 className="projects_heading">
            Wybrane <span>Realizacje</span>
          </h2>
          <p className="projects_subtitle">
            Moim celem nie jest po prostu pisanie suchego kodu, ale tworzenie produktów, które rozwiązują realne problemy, automatyzują procesy i generują zyski.
          </p>
        </header>

        {/* Zig-Zag List */}
        <div className="projects_list">
          {projects.map((project, index) => (
            <div key={index} className="projects_row" data-aos="fade-up">
              
              {/* Visual Side (Image/Graphic) */}
              <div className={`projects_row-visual ${project.imageClass}`}>
                <div className="projects_row-overlay"></div>
              </div>

              {/* Content Side (Text & Actions) */}
              <div className="projects_row-content">
                <span className="projects_row-category">{project.category}</span>
                <h3 className="projects_row-title">{project.title}</h3>
                <p className="projects_row-description">{project.description}</p>

                <div className="projects_row-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="projects_tech-tag">{t}</span>
                  ))}
                </div>

                <div className="projects_row-actions">
                  <Link href={`/projekty/${project.id}`} className="projects_btn">Szczegóły</Link>
                  {project.preview !== "#" && (
                    <a href={project.preview} target="_blank" rel="noopener noreferrer" className="projects_btn projects_btn--outline">Live Preview</a>
                  )}
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects_btn projects_btn--outline">GitHub</a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;