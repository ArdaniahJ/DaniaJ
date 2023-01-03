import React, {useState, useRef, useEffect} from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

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

const Experience = () => {
  return (
    <section id='experience'>
      <div>
      <FadeInSection>
        <h5>Technologies & Languages</h5>
        <h2>Experience</h2>
      </FadeInSection>
      </div>

      <div className="container experience__container">
      <FadeInSection>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

          <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Web Scraping</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript ES7 </h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            </FadeInSection>
          </div>
        </div>
        </FadeInSection>

        {/* MACHINE LEARNING & DEEP LEARNING */}
      <FadeInSection>
        <div className='experience__machinelearning'>
          <h3>Machine Learning & Deep Learning</h3>

          <FadeInSection>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Object Detection <br/>(YOLOv5 | YOLOv6 | YOLOv7)</h4>
                <small className='text-light'>Experienced</small>
              </div>
          </article>
          </FadeInSection>  

          <FadeInSection>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Statistics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
          </FadeInSection>  

          <FadeInSection>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tensorflow & Keras | SciPy | NumPy</h4>
                <small className='text-light'>Intermediate</small>
              </div>
          </article>
          </FadeInSection>

          <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NLP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>IBM Watson | Azure ML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </FadeInSection>

            <FadeInSection>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            </FadeInSection>
        </div>
      </FadeInSection>
      </div>
    </section>
  )
}

export default Experience