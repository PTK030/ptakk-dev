import React from 'react'

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <div className="skills_content">
            <div className="skills_content--headingbox">
                <h2 className="skills_content-heading">Umiejętności</h2>
            </div>
            <div className="skills_content-wrapper">
                <div className="skills_content-wrapper_row">
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/nextjs.png" alt="next js icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Next JS</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/react.png" alt="react js icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">React JS</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/typescript.png" alt="typescript icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Typescript</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/mongo.png" alt="mongo db icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Mongo DB</p>
                    </div>
                </div>
                <div className="skills_content-wrapper_row">
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/sass.png" alt="sass icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Sass</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/bootstrap.png" alt="bootstrap icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Bootstrap</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/tailwind.png" alt="tailwind icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Tailwind</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in" >
                        <img src="/github.png" alt="github icon" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Github</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills