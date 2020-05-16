import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { Element } from 'react-scroll'
import ExperienceItem from './ExperienceItem'
import { Title } from '../Project/Project'

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

const ExperienceTitle = styled(Title)`
  text-align: center;
  margin-bottom: 2rem;
`
const VerticalLine = styled.div`
  margin-left: 0.5rem;
  padding-left: 0.3125rem;
  background: ${({ theme }) => `linear-gradient(0deg, ${theme.color.primary.normal}, ${theme.color.primary.light})`};
`
const WhiteInside = styled.div`
  background: white;
  padding: 1.5rem 0 0rem;
`

function Experience(props) {
  return (
    <Element name="experience">
      <Container>
        <ExperienceTitle>Experience</ExperienceTitle>
        <VerticalLine>
          <WhiteInside>
            {experiences.map(experience => (
              <Row key={experience.company}>
                <Col xs={12}>
                  <ExperienceItem {...experience}/>
                </Col>
              </Row>
            ))}
          </WhiteInside>
        </VerticalLine>
      </Container>
    </Element>
  );
}

export default Experience;
