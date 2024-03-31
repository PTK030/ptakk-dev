import React from 'react'
import Image from "next/image"

const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <div className="skills_content">
            <div className="skills_content--headingbox">
                <h2 className="skills_content-heading">Umiejętności</h2>
            </div>
            <div className="skills_content-wrapper">
                <div className="skills_content-wrapper_row">
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/nextjs.png" alt="next js icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Next JS</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/react.png" alt="react js icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">React JS</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/typescript.png" alt="typescript icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Typescript</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/mongo.png" alt="mongo db icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Mongo DB</p>
                    </div>
                </div>
                <div className="skills_content-wrapper_row">
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/sass.png" alt="sass icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Sass</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/bootstrap.png" alt="bootstrap icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Bootstrap</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/tailwind.png" alt="tailwind icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Tailwind</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <Image src="/github.png" alt="github icon" className='skills_content-wrapper_row-box_img' width={50} height={50}/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Github</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills