import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {HiOutlineFolder} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image " />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <HiOutlineFolder className='about_icon' />
              <h5>Projects in MFU</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>
            Hi, My name is Bunyat Assawadeekul you can call me Jom or Shiba.
            &nbsp; I'm studying in bachelor's degree for computer engineering
            school of information technology Mae Fah Luang University. 
            I love working in coding. Whether it's in the front-end or black-end 
            because studying and working in this field is very challenging.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About