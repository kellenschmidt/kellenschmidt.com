import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { TitleSuper, Title, TitleSub, SecondaryButton, MockImg, Line } from '../Project/Project'
import Fade from 'react-reveal/Fade'

const GrowHover = styled.div`
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
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
  margin-bottom: ${({ selected}) => selected ? "30rem" : "5rem"};
  height: 50vh;
  justify-content: between;
  transition: margin-bottom 1s ease-in-out;
`
const ItemTitle = styled.p`
  margin: ${({ selected }) => selected ? "0" : "1rem 0"};
  font-weight: 500;
  font-size: ${({ selectedIdx }) => selectedIdx === -1 ? "1.2rem" : "1.0rem"};
  transition: font-size 500ms ease-in-out;
`
const LearnMoreDiv = styled.div`
  text-align: center;
  padding-bottom: 4rem;
  color: lightgrey;
`
const CenterLine = styled(Line)`
  margin: auto;
`

function ProjectCarousel(props) {
  const [selected, setSelected] = useState(-1)
  
  return (
    <Container className={props.className}>
      <Fade bottom>
        <Fade opposite when={selected === -1} duration={500}>
          <LearnMoreDiv>
            <span>(Click below to learn more)</span>
          </LearnMoreDiv>
        </Fade>
      </Fade>
      <OuterRow selected={selected !== -1}>
        {
          props.projects.map((project, idx) => (
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
                      <CenterLine color={project.color}/>
                      <TitleSuper>{project.superText}</TitleSuper>
                      <Title>{project.titleText}</Title>
                      <TitleSub>{project.subText}</TitleSub>
                      <SecondaryButton color={project.color} onClick={project.primaryButton.onClick}>{project.primaryButton.text}</SecondaryButton>
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
