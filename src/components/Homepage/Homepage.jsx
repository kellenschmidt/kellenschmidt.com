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

const BlackBG = styled.div`
  background-color: black;
  overflow: hidden;
`
const WhiteBG = styled.div`
  background-color: white;
`
const TallDiv = styled.div`
  height: 50vh;
`

const heroProject = {
  key: "hero",
  superText: "Hey there, welcome",
  titleText: "This is Kellen Schmidt's personal website",
  subText: "I'm a software engineer with a particular interest in full-stack web development. Check out my awesome projects and work experience!",
  primaryButton: {
    text: "Learn More",
    link: "",
  },
  secondaryButton: {
    text: "Contact",
    link: "",
  },
  color: "pink",
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
    subText: "Test",
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
          <TallDiv></TallDiv>
        </WhiteBG>
      </Slide>
    </BlackBG>
  );
}

export default Homepage;
