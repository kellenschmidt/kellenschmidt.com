import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { Element } from 'react-scroll'
import ExperienceItem from './ExperienceItem'

const experiences = [
  {
    company: "Credera",
    position: "Consultant",
    startDate: "Jul 2019",
    endDate: "Present",
    location: "Dallas, TX",
    logo: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto/credera-282",
    logoWidth: "13rem",
    summary: "",
  },
  {
    company: "Capital One",
    position: "Software Engineer Intern",
    startDate: "Jun 2018",
    endDate: "Aug 2018",
    location: "Dallas, TX",
    logo: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto/capitalone-300",
    logoWidth: "10.5rem",
    summary: "",
  },
  {
    company: "Southwest Airlines",
    position: "Software Engineer Intern",
    startDate: "Jan 2018",
    endDate: "May 2018",
    location: "Dallas, TX",
    logo: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto/southwest-300",
    logoWidth: "13rem",
    summary: "",
  },
]

const ExperienceTitle = styled.p`
  font-weight: 700;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 2.625rem;
  line-height: 3.125rem;
  text-align: center;
  margin-bottom: 0.5rem;
`
const rotate = keyframes`
	0% {
		transform: rotate(0.125turn);
	}
	100% {
		transform: rotate(1.125turn);
	}
`
const AnimatedLine = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  padding: 3rem 0;
  margin-bottom: 12rem;
  ${({ theme }) => theme.breakpoints.lg`
    border-radius: 16px;
    padding: 2rem 0;
  `}
  ${({ theme }) => theme.breakpoints.md`
    border-radius: 12px;
    padding: 1.5rem 0;
    margin-bottom: 8rem;
  `}
	
	&::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 55.9% 58.5%, 50% 50%;
    ${({ theme }) => theme.breakpoints.xl`
      background-size: 53.6% 54.1%, 50% 50%;
    `}
    ${({ theme }) => theme.breakpoints.lg`
      background-size: 50% 50%, 50% 50%;
    `}
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), ${({ theme }) => `linear-gradient(0deg, ${theme.color.primary.normal}, ${theme.color.primary.light})`};
    transform: rotate(0.125turn);
    ${({ active }) => active ? css`animation: ${rotate} 1.5s ease-in-out;` : ""}
		animation-fill-mode: both;
	}

	&::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 4px;
    top: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-radius: 15px;
    background: white;
    ${({ theme }) => theme.breakpoints.md`
      border-radius: 8px;
    `}
	}
`

function Experience(props) {
  const [animationActive, setAnimationActive] = useState(false)

  useEffect(() => {
    if (animationActive) {
      setTimeout(() => {
        setAnimationActive(false)
      }, 1500)
    }
  }, [animationActive])

  const startAnimation = () => {
    if (!animationActive) {
      setAnimationActive(true)
    }
  }
  
  return (
    <Element name="experience">
      <Container>
        <ExperienceTitle>Experience</ExperienceTitle>
        <AnimatedLine active={animationActive}>
          {experiences.map((experience, index) => (
            <Row key={experience.company} onClick={startAnimation} style={{cursor: 'pointer'}}>
              <Col xs={12}>
                <ExperienceItem {...experience} last={index === experiences.length - 1}/>
              </Col>
            </Row>
          ))}
        </AnimatedLine>
      </Container>
    </Element>
  );
}

export default Experience;
