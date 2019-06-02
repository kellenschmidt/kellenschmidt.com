import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import heroMock from '../../assets/hero2.png'
import mockup2 from '../../assets/mockup2.png'
import mockup3 from '../../assets/mockup3.png'
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Project from '../Project/Project';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Link } from 'react-scroll'
import Skills from '../Skills/Skills';
import { MediumAndAbove, Small } from '../../responsiveTags'
import interactiveResumeMock from '../../assets/interactive-resume.png'
import southwestAirlinesMock from '../../assets/southwest-airlines.png'
import capitalOneMock from '../../assets/capital-one.png'

const BlackBG = styled.div`
  background-color: black;
  overflow: hidden;
`
const WhiteBG = styled.div`
  background-color: white;
`

const heroProject = {
  key: "hero",
  superText: "Hey there, welcome",
  titleText: "This is Kellen Schmidt's personal website",
  subText: "I'm a software engineer with a particular interest in full-stack web development. Check out my awesome projects and work experience!",
  primaryButton: {
    text: "Learn More",
    link: <Link to="about" smooth={true} duration={500} offset={-100}>Test</Link>,
  },
  secondaryButton: {
    text: "Resume",
    link: "https://res.cloudinary.com/kellenscloud/image/upload/Kellen_Schmidt_Resume.pdf",
  },
  color: "main",
  image: heroMock,
  reverse: false,
}

const mainProjects = [
  {
    key: "url-shortener",
    superText: "Angular 7 | GraphQL",
    titleText: "URL Shortener",
    subText: "Take long URLs and compress them into short links which are easy to share, tweet, email! Created entirely from scratch as a personal project.",
    primaryButton: {
      text: "Visit",
      link: "",
    },
    secondaryButton: {
      text: "More Info",
      link: "",
    },
    color: "orange",
    image: mockup2,
    reverse: false,
  },
  {
    key: "compass-app",
    superText: "React | Redux | Express",
    titleText: "BakeMark Compass App",
    subText: "Built a full-stack web application used daily by 200+ sales representatives nationwide to capture competitive product information and strategically analyze market position.",
    primaryButton: {
      text: "Visit",
      link: "",
    },
    secondaryButton: {
      text: "More Info",
      link: "",
    },
    color: "blue",
    image: mockup3,
    reverse: true,
  },
]

const carouselProjects = [
  {
    key: "capital-one",
    superText: "Software Engineer Intern, Summer 2018",
    titleText: "Capital One",
    subText: "Implemented an Angular web application with a Java Spring backend consuming from Kafka and Cassandra cloud instances to display a customer's email communication history to call center agents.",
    primaryButton: {
      text: "Visit",
      link: "",
    },
    secondaryButton: {
      text: "More Info",
      link: "",
    },
    color: "cap1Red",
    image: capitalOneMock,
    reverse: true,
  },
  {
    key: "southwest-airlines",
    superText: "Software Engineer Intern, Spring 2018",
    titleText: "Southwest Airlines",
    subText: "Developed a React web application for a backend software team to analyze the quality of terabytes of data every night and graph relevant statistics for use by business analysts and operations teams.",
    primaryButton: {
      text: "Visit",
      link: "",
    },
    secondaryButton: {
      text: "More Info",
      link: "",
    },
    color: "boldBlue",
    image: southwestAirlinesMock,
    reverse: true,
  },
  {
    key: "interactive-resume",
    superText: "Angular 7 | PHP",
    titleText: "Interactive Resume Website",
    subText: "Previous version of my personal portfolio website to detail my background, describe my projects, characterize my work experience, and depict my skills.",
    primaryButton: {
      text: "Visit",
      link: "",
    },
    secondaryButton: {
      text: "More Info",
      link: "",
    },
    color: "green",
    image: interactiveResumeMock,
    reverse: true,
  },
]

function Homepage(props) {
  return (
    <BlackBG>
      <Slide bottom duration={500}>
        <WhiteBG>
          <NavBar />
          <Project hero {...heroProject} id={heroProject.key}/>
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
  );
}

export default Homepage;
