import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { TitleSuper, Title, TitleSub, SecondaryButton, MockImg } from '../Project/Project'
import Fade from 'react-reveal/Fade'
import interactiveResumeMock from '../../assets/interactive-resume.png'
import southwestAirlinesMock from '../../assets/southwest-airlines.png'
import capitalOneMock from '../../assets/capital-one.png'

const GrowHover = styled.div`
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: ${({ selected }) => selected ? "scale(1.0)" : "scale(1.1)"};
  }
`
const MyCol = styled(Col)`
  transition: all 1s ease-in-out;
  text-align: center;
`
const OuterRow = styled(Row)`
  align-items: baseline;
  display: flex;
  margin-bottom: 15rem;
  height: 50vh;
`
const ItemTitle = styled.p`
  margin: ${({ selected }) => selected ? "0" : "1rem 0"};
  font-weight: 500;
  font-size: ${({ selectedIdx }) => selectedIdx === -1 ? "1.2rem" : "1.0rem"};
  transition: font-size 500ms ease-in-out;
`
const LearnMoreDiv = styled.div`
  text-align: center;
  padding: 2rem 0 4rem;
  color: lightgrey;
`

const carouselProjects = [
  {
    key: "interactive-resume",
    superText: "Angular 7 | PHP",
    titleText: "Interactive Resume Website",
    subText: "Previous version of my personal portfolio website to detail my background, describes my projects, characterizes my work experience, and depicts my skills.",
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
]

function ProjectCarousel() {
  const [selected, setSelected] = useState(-1)
  
  return (
    <Container>
      <Fade bottom>
        <Fade opposite when={selected === -1} duration={500}>
          <LearnMoreDiv>
            <span>(Click below to learn more)</span>
          </LearnMoreDiv>
        </Fade>
      </Fade>
      <OuterRow className="d-flex justify-content-between">
        {
          carouselProjects.map((project, idx) => (
            <MyCol xs={selected === idx ? 8 : selected === -1 ? 4 : 2} onClick={() => setSelected(idx)} key={project.key}>
              <Fade bottom delay={idx * 200}>
                <Row>
                  <MyCol xs={{ size: selected === idx ? 12 : 12}} className="mx-auto">
                    <GrowHover selected={selected === idx}>
                      <MockImg src={project.image} alt="Project mockup" />
                      <Fade opposite when={selected !== idx} duration={300} delay={selected === idx ? 0 : 1000}>
                        <ItemTitle selectedIdx={selected} selected={selected === idx}>{project.titleText}</ItemTitle>
                      </Fade>
                    </GrowHover>
                  </MyCol>
                  <MyCol xs={selected === idx ? 12 : 0}>
                    <Fade opposite when={selected === idx} duration={300} delay={selected === idx ? 1000 : 0}>
                      <TitleSuper>{project.superText}</TitleSuper>
                      <Title>{project.titleText}.</Title>
                      <TitleSub>{project.subText}</TitleSub>
                      <SecondaryButton color={project.color}>More Info</SecondaryButton>
                    </Fade>
                  </MyCol>
                </Row>
              </Fade>
            </MyCol>
          ))
        }
      </OuterRow>
    </Container>
  );
}

export default ProjectCarousel;
