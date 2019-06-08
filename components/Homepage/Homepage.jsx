import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import Slide from 'react-reveal/Slide'
import About from '../About/About';
import Project from '../Project/Project';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';
import Hero from '../Project/Hero';
import { Small, MediumAndAbove } from '../responsiveTags'
import { scroller } from 'react-scroll'
import InfoModal from '../InfoModal/InfoModal';

const BlackBG = styled.div`
  background-color: black;
  overflow: hidden;
`
const WhiteBG = styled.div`
  background-color: white;
`

function Homepage(props) {
  const mainProjects = [
    {
      key: "url-shortener",
      superText: "Angular 8 | GraphQL",
      titleText: "URL Shortener",
      subText: "Take long URLs and compress them into short links which are easy to share, tweet, email! Created entirely from scratch as a personal project.",
      primaryButton: {
        onClick: () => window.open('https://kellenschmidt.com/url', '_blank'),
        text: "Try it out",
      },
      secondaryButton: {
        onClick: () => setModalDataKey("url-shortener"),
        text: "Learn More",
      },
      color: "usOrange",
      image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto,c_scale,w_648/url-shortener-mock",
      reverse: false,
      modalBody: <>
        <h5>What I did</h5>
        <p class="mb-0">Built the entire application, both front-end and back-end on my own from scratch</p>
        <ul>
          <li>Implemented an Angular 2 front-end using Bootstrap 4, Material Design, and Sass</li>
          <li>Designed and constructed a MySQL database to store the URL and user data</li>
          <li>Built robust user account functionality utilizing JSON web tokens, password hashing, authentication, and form validation</li>
          <li>Configured an existing AWS EC2 instance with Apache virtual host subdomains to host multiple applications under the same domain</li>
          <li>Used the Slim Framework to expose a RESTful API to enable the front-end to interact with the back-end database</li>
        </ul>
        <h5>Features</h5>
        <ul>
          <li>Can create more than 250,000 unique URLs using just 3 characters (Expandable to >16,000,000 with 4 characters or >1,000,000,000 with 5 characters)</li>
          <li>Generates short URL codes using a cryptographically secure pseudo-random number generator (CSPRNG) that is unpredictable and without bias</li>
          <li>Users can register for an account to get their own private table of links that they alone control</li>
          <li>Logs every action (visit homepage, create link, delete link) on the site and the information (operating system, browser, and IP address) of the user making the action</li>
          <li>Logs the same information about users when they click on a kellenschmidt.com short link</li>
          <li>Responsive design which scales the application to best fit every screen size from mobile to desktop</li>
          <li>Cleanses input to prevent SQL injection</li>
        </ul>
        <h5>Future Goals</h5>
        <ul>
          <li>Link analytics page
            <ul>
              <li>Contains pie charts and graphs about the individual links including the breakdown of the operating systems, browsers, and IP addresses of the users visiting the links and the trend of those stats over time</li>
            </ul>
          </li>
        </ul>
      </>,
    },
    {
      key: "compass-app",
      superText: "React | Redux | Express",
      titleText: "BakeMark Sales App",
      subText: "Built a full-stack web application used daily by 200+ sales representatives nationwide to capture competitive product information and strategically analyze market position.",
      primaryButton: {
        onClick: () => setModalDataKey("compass-app"),
        text: "Learn More",
      },
      color: "bmBlue",
      image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto,c_scale,w_648/compass-app-mock",
      reverse: true,
      modalBody: "TBD..."
    },
  ]
  
  const carouselProjects = [
    {
      key: "capital-one",
      superText: "Software Engineer Intern, Summer 2018",
      titleText: "Capital One",
      subText: "Implemented an Angular web application with a Java Spring backend consuming from Kafka and Cassandra cloud instances to display a customer's email communication history to call center agents.",
      primaryButton: {
        onClick: () => setModalDataKey("capital-one"),
        text: "Learn More",
      },
      color: "cap1Red",
      image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto,c_scale,w_1597/capital-one-mock",
      reverse: false,
      modalBody: <>
        <h5>What I did</h5>
        <ul>
          <li>Created a full-stack web application to track and visualize customer email communications for call center agents</li>
          <li>Developed a Java stream application to consume from 3 Kafka topics and a Cassandra database hosted on AWS</li>
          <li>Implemented a Java Spring API to expose a PostgreSQL database of the aggregated Kafka and Cassandra data</li>
          <li>Collaborated between teams to integrate the completed product into an existing production application</li>
          <li>Formally presented the solution to senior business and technology executives</li>
        </ul>
        <h5>Responsibilities</h5>
        <ul>
          <li>Coordinated with customers to gain a comprehesive understanding of the problem from a business standpoint</li>
          <li>Organized presentations of the finished product to multiple high ranking business and technology leaders</li>
          <li>Participated in Scrum stand-ups and other ceremonies</li>
          <li>Worked collaboratively between teams to find valuable connections between products</li>
        </ul>
      </>
    },
    {
      key: "southwest-airlines",
      superText: "Software Engineer Intern, Spring 2018",
      titleText: "Southwest Airlines",
      subText: "Developed a React web application for a backend software team to analyze the quality of terabytes of data every night and graph relevant statistics for use by business analysts and operations teams.",
      primaryButton: {
        onClick: () => setModalDataKey("southwest-airlines"),
        text: "Learn More",
      },
      color: "boldBlue",
      image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto,c_scale,w_1597/southwest-airlines-mock",
      reverse: true,
      modalBody: <>
        <h5>What I did</h5>
        <ul>
          <li>Designed and implemented a React web application to analyze and illustrate the quality of data processed by an production Java application</li>
          <li>Built rapid prototypes in React, Angular, and Vue.js to evaluate their viability for the project and decide which to move forward with</li>
          <li>Architected and developed the front-end on my own, thereby gaining a comprehensive understanding of React</li>
          <li>Integrated with a Gradle Java application and deployed through development, QA, and production environments</li>
          <li>Used daily by multiple teams to confirm the quality of their data operations and identify points for improvement</li>
          <li>Learned and used enterprise software tools such as Jira, Confluence, Bitbucket Server</li>
        </ul>
        <h5>Responsibilities</h5>
        <ul>
          <li>Participated in daily Scrum stand-ups</li>
          <li>Completed assigned stories in two week sprints</li>
          <li>Finished the same number of story points each sprint as full-time developers on the team</li>
          <li>Engaged in velocity, scoring, retrospective, and release increment activies</li>
          <li>Created and managed Jenkins projects and builds</li>
        </ul>
      </>
    },
    {
      key: "interactive-resume",
      superText: "Angular 8 | PHP",
      titleText: "Interactive Resume Website",
      subText: "Previous version of my personal portfolio website to detail my background, describe my projects, characterize my work experience, and depict my skills.",
      primaryButton: {
        onClick: () => window.open('https://kellenschmidt.com', '_blank'),
        text: "Visit",
      },
      secondaryButton: {
        onClick: () => setModalDataKey("interactive-resume"),
        text: "Learn More",
      },
      color: "irGreen",
      image: "https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto,c_scale,w_1597/hero-green",
      reverse: false,
      modalBody: "TBD..."
    },
  ]

  const heroProject = {
    key: "hero",
    superText: "Hey there, welcome",
    titleText: "This is Kellen Schmidt's personal website",
    subText: "I'm a software engineer with an interest in full-stack web development. Check out my awesome projects and work experience!",
    primaryButton: {
      onClick: () => window.open('https://res.cloudinary.com/kellenscloud/image/upload/Kellen_Schmidt_Resume.pdf', '_blank'),
      text: "Resume",
    },
    secondaryButton: {
      onClick: () => scroller.scrollTo('contact', {
        duration: 750,
        smooth: true,
        offset: -160,
      }),
      text: "Contact",
    },
    color: "primary",
    image: `https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto,c_scale,w_1597/hero-${props.theme.color.name}`,
    reverse: false,
  }

  const [modalDataKey, setModalDataKey] = useState(undefined)
  const { titleText: title, modalBody: body, superText } = [...mainProjects, ...carouselProjects].find(x => x.key === (modalDataKey || "url-shortener"))
  const modalTitle = superText.includes("|") ? title : <><h3 className="d-inline-block m-0">{title}</h3><p className="d-inline-block m-0">, {superText}</p></>
  
  const closeModal = () => {
    setModalDataKey(undefined)
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
        <InfoModal open={Boolean(modalDataKey)} onClose={closeModal} title={modalTitle} body={body}/>
      </Slide>
    </BlackBG>
  )
}

export default withTheme(Homepage)
