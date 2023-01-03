import React, {useState, useRef, useEffect} from 'react'
import './portfolio.css' 
import {VscGithub} from 'react-icons/vsc'
import {SiBlogger} from 'react-icons/si'
import {CgFolder} from 'react-icons/cg'
import {BsFillEyeFill} from 'react-icons/bs'
import {BsFillEyeSlashFill} from 'react-icons/bs'

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

const data = [ 
  {
    id:1,
    title: 'DaniaJ | Portfolio.js (Done)',
    desc: 'Dania.J.js is a small library that helps with clear and succint informational presentation that are easy to navigate. Built by Ardaniah J (DaniaJ) ',
    techStack: 'JavaScript, HTML | CSS, React.js',
    github: 'https://github.com',
    blog: 'https://daniaj.me'
  },
  {
    id:2,
    title: 'YOLOv5s on a Custom Road Sign Dataset (Road)',
    desc: 'Customizing YOLOv5s configurations on a custom RoadSign Dataset, inferencing it on road-sign images and road-trip video to subsequently export it to TensorRT and ONNX',
    techStack: 'Python, YOLOv5, PyTorch, Tesla-T4, Google Colab, TensorRT, ONNX',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com/2022/07/blog-post-yolov5s-custom-dataset.html'
  },
  {
    id:3,
    title: 'Distributed Loggin and Monitoring System',
    desc: 'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices',
    techStack: 'Node.js (Express.js), React.js, PostgreSQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:4,
    title: 'Odin Bot',
    desc: 'A Telegram bot that helps you excel on your daily tasks through Node NLP',
    techStack: 'JavaScript, Node.js, Natural NLP, Telegram API',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:5,
    title: 'Modern Toxic Tall Tales (Done)',
    desc: 'A Gradio.app Toxic Comment Detector to detect and classify a level of modern tall tales (aka toxic comments) across seas of toxic comments',
    techStack: 'Python, NLP, TPU, TensorFlow, Colab, Gradio.app, HTML',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:6,
    title: 'You are Lying! (Done)',
    desc: 'A simple React.js based Linear Regression game to detect whether a hiring candidate is lying about their previous salary',
    techStack: 'Python, JavaScript, HTML | CSS, React.js, Linear Reg, Colab, Python',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:7,
    title: 'TDSB Homework Management Interface',
    desc: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
    techStack: 'Python (Flask), Vue.js, Bootstrap, SQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:8,
    title: 'TDSB Homework Management Interface',
    desc: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
    techStack: 'Python (Flask), Vue.js, Bootstrap, SQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:9,
    title: 'TDSB Homework Management Interface',
    desc: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
    techStack: 'Python (Flask), Vue.js, Bootstrap, SQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:10,
    title: 'TDSB Homework Management Interface',
    desc: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
    techStack: 'Python (Flask), Vue.js, Bootstrap, SQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:11,
    title: 'TDSB Homework Management Interface',
    desc: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
    techStack: 'Python (Flask), Vue.js, Bootstrap, SQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  },
  {
    id:12,
    title: 'TDSB Homework Management Interface',
    desc: 'An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.',
    techStack: 'Python (Flask), Vue.js, Bootstrap, SQL',
    github: 'https://github.com',
    blog: 'https://ardaniahjamaluddin.blogspot.com'
  }
]

const Portfolio = () => {
  const [noOfElement, setnoOfElement] = useState(6);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  }
  const closeIt = () => {
    setnoOfElement(6);
  }

  const slice = data.slice(0, noOfElement);
  return (
      <section id='portfolio'>
      <div>
      <FadeInSection>
        <div className='lets__test'>
        <h5>Personal Projects</h5>
        <h2>Portfolio</h2>
        </div>
      </FadeInSection>
      </div>



      <div className='container portfolio__container'>
        {slice.map (({id, title, desc, techStack, github, blog}) => {
            return (
              <FadeInSection>
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-cta'>
                <CgFolder style={{fontSize: 30, marginTop: 7, marginBottom: 20, position: 'absolute', marginLeft: 17}}></CgFolder>
                <a href={github} target='_blank'><VscGithub 
                style={{fontSize: 24, marginTop: 11, marginBottom: 20, position: 'absolute', marginLeft: 335, color: '#ccd6f6'}}></VscGithub></a>
              </div>
              <div>
                <a href={blog} target='_blank'><SiBlogger 
                style={{fontSize: 24, marginTop: 11, marginBottom: 20, position: 'absolute', marginLeft: 300, color: '#ccd6f6'}}></SiBlogger></a>
              </div>

              <div className='portfolio__item-desc'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <small>{techStack}</small>
              </div>
            </article>
            </FadeInSection>
            )
          })
        }
      </div>
      <div 
        className='btn-dark'
        onClick={() => loadMore()}>
        <BsFillEyeFill style={{fontSize: 30, marginTop: 40, marginBottom: 20, position: 'absolute', marginLeft: 850}} />
      </div>
      <div className='btn-light'
      onClick={() => closeIt()}>
        <BsFillEyeSlashFill style={{fontSize: 30, marginTop: 40, marginBottom: 20, position: 'absolute', marginLeft: 900}} />
      </div>
    </section>
  )
}

export default Portfolio