import React from 'react'
import styled, { withTheme } from 'styled-components'
import Slide from 'react-reveal/Slide'
import About from '../About/About';
import Project from '../Project/Project';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Link } from 'react-scroll'
import Skills from '../Skills/Skills';
import Hero from '../Project/Hero';
import { Small, MediumAndAbove } from '../responsiveTags'

const BlackBG = styled.div`
  background-color: black;
  overflow: hidden;
`
const WhiteBG = styled.div`
  background-color: white;
`
const Url = styled.a`
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`

const mainProjects = [
  {
    key: "url-shortener",
    superText: "Angular 8 | GraphQL",
    titleText: "URL Shortener",
    subText: "Take long URLs and compress them into short links which are easy to share, tweet, email! Created entirely from scratch as a personal project.",
    primaryButton: <Url href="https://kellenschmidt.com/url">Try it out</Url>,
    secondaryButton: "Learn More",
    color: "usOrange",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto/url-shortener-mock",
    reverse: false,
  },
  {
    key: "compass-app",
    superText: "React | Redux | Express",
    titleText: "BakeMark Sales App",
    subText: "Built a full-stack web application used daily by 200+ sales representatives nationwide to capture competitive product information and strategically analyze market position.",
    primaryButton: "Learn More",
    secondaryButton: "TBD",
    color: "bmBlue",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto/compass-app-mock",
    reverse: true,
  },
]

const carouselProjects = [
  {
    key: "capital-one",
    superText: "Software Engineer Intern, Summer 2018",
    titleText: "Capital One",
    subText: "Implemented an Angular web application with a Java Spring backend consuming from Kafka and Cassandra cloud instances to display a customer's email communication history to call center agents.",
    primaryButton: "Learn More",
    secondaryButton: "TBD",
    color: "cap1Red",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto/capital-one-mock",
    reverse: false,
  },
  {
    key: "southwest-airlines",
    superText: "Software Engineer Intern, Spring 2018",
    titleText: "Southwest Airlines",
    subText: "Developed a React web application for a backend software team to analyze the quality of terabytes of data every night and graph relevant statistics for use by business analysts and operations teams.",
    primaryButton: "Learn More",
    secondaryButton: "TBD",
    color: "boldBlue",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto/southwest-airlines-mock",
    reverse: true,
  },
  {
    key: "interactive-resume",
    superText: "Angular 8 | PHP",
    titleText: "Interactive Resume Website",
    subText: "Previous version of my personal portfolio website to detail my background, describe my projects, characterize my work experience, and depict my skills.",
    primaryButton: <Url href="https://kellenschmidt.com">Visit</Url>,
    secondaryButton: "Learn More",
    color: "irGreen",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto/v1559690648/hero-green",
    reverse: false,
  },
]

function Homepage(props) {
  const heroProject = {
    key: "hero",
    superText: "Hey there, welcome",
    titleText: "This is Kellen Schmidt's personal website",
    subText: "I'm a software engineer with an interest in full-stack web development. Check out my awesome projects and work experience!",
    primaryButton: <Url href="https://res.cloudinary.com/kellenscloud/image/upload/Kellen_Schmidt_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Url>,
    secondaryButton: <Link to="contact" smooth={true} duration={750} offset={-160}>Contact</Link>,
    color: "primary",
    image: `https://res.cloudinary.com/kellenscloud/image/upload/hero-${props.theme.color.name}`,
    reverse: false,
  }
  
  return (
    <BlackBG>
      <Slide bottom duration={500}>
        <WhiteBG>
          <Hero {...heroProject}/>
          <About />
          {
            mainProjects.map(project => (
              <Project {...project} id={project.key}/>
            ))
          }
          <Small>
            {
              carouselProjects.map(project => (
                <Project {...project} id={project.key}/>
              ))
            }
          </Small>
          <MediumAndAbove>
            <ProjectCarousel projects={carouselProjects}/>
          </MediumAndAbove>
          <Education />
          <Skills />
          <Contact/>
          <Footer/>
        </WhiteBG>
      </Slide>
    </BlackBG>
  )
}

export default withTheme(Homepage)
