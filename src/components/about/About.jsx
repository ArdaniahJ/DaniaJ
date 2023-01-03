import React, {useState, useRef, useEffect}from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {RiFoldersLine} from 'react-icons/ri'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
  }

const About = () => {
  return (
    
    <section id='about'>
      <div>
      <FadeInSection>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </FadeInSection>
      </div>

      <div className="container about__container">
        <FadeInSection>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        </FadeInSection>
        
        <div className="about__content">
          <FadeInSection>
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years of Working</small>
            </article>

            <article className='about__card'>
              <RiFoldersLine className='about__icon'/>
              <h5>Projects Done</h5>
              <small>7+ Completed Project</small>
            </article>
            </div>
            </FadeInSection>

          <FadeInSection>
          <p id="font__color">Graduated from <a href="https://uitm.edu.my//" target="_blank"><span>Mara University of Technology (UiTM)</span></a> majoring in Electronics Engineer (Computer).
             Worked at <a href="https://www.topglove.com/" target="_blank"><span>Top Glove Corporation Berhad</span></a> as Automation Engineer specializing in MES (Digital Twin) and Cognitive Based Software Development.<br/><br/>
             Recently took a Data Management (Data Science) Internship at <a href="https://www.pandit-it.com/" target="_blank"><span>Pandit Sdn Bhd</span></a> and currently seeking a Junior Data Scientist or Junior AI Developer role to fully venturing myself in AI world. 
          </p>
          </FadeInSection>

          <FadeInSection>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

export default About