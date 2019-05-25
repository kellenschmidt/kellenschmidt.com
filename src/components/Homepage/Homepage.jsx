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
const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`
const Test = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem;

  position: relative;

  background-color: white;
  background-clip: padding-box;
  border: solid .5rem transparent;
  border-radius: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -.5rem;
    border-radius: inherit;
    background: linear-gradient(to right, red, orange);
  }
`

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
          <ProjectCarousel />
          <Education />
          <Wrapper>
            <Test>This is a test <br /> Kellen</Test>
          </Wrapper>
          <Skills />
          <Contact/>
          <Footer/>
        </WhiteBG>
      </Slide>
    </BlackBG>
  );
}

export default Homepage;
