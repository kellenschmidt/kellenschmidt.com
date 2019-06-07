import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { Element } from 'react-scroll'
import SkillGroup from './SkillGroup'

const skillGroups = [
  {
    title: "Frontend Web Dev",
    skills: [
      {
        name: "React",
        image: "react",
        score: 90,
      },
      {
        name: "Angular",
        image: "angular",
        score: 70,
      },
      {
        name: "Vue",
        image: "vuejs",
        score: 50,
      },
      {
        name: "Redux",
        image: "redux",
        score: 80,
      },
      {
        name: "Javascript ES6+",
        image: "javascript1",
        score: 75,
      },
    ],
  },
  {
    title: "Backend Web Dev",
    skills: [
      {
        name: "GraphQL",
        image: "graphql",
        score: 60,
      },
      {
        name: "Node.js",
        image: "nodejs1",
        score: 80,
      },
      {
        name: "Express",
        image: "express",
        score: 80,
      },
      {
        name: "MySQL",
        image: "mysql",
        score: 75,
      },
      {
        name: "Mongo",
        image: "mongodb",
        score: 55,
      },
    ],
  },
  {
    title: "Dev Ops",
    skills: [
      {
        name: "Docker",
        image: "docker1",
        score: 80,
      },
      {
        name: "Kubernetes",
        image: "kubernetes",
        score: 65,
      },
      {
        name: "AWS/GCP/Azure",
        image: "aws",
        score: 70,
      },
      {
        name: "CI/CD",
        image: "jenkins",
        score: 75,
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "Python/C++/Java",
        image: "cplusplus",
        score: 75,
      },
      {
        name: "Github",
        image: "github",
        score: 85,
      },
      {
        name: "Scrum",
        image: "scrum",
        score: 80,
      },
      {
        name: "Bash",
        image: "bash",
        score: 70,
      },
    ],
  },
]

const MyContainer = styled(Container)`
  position: relative;
  height: 50vh;
  top: 0px;
`

function Skills(props) {
  const [current, setCurrent] = useState(null)
  const [previous, setPrevious] = useState(null)

  const setOpen = (idx) => {
    setPrevious(current)
    setCurrent(idx)
  }
  
  return (
    <Element name="skills">
      <MyContainer>
        {
          skillGroups.map((group, idx) => (
            <Row key={group.title}>
              <Col xs={12} className="position-static">
                <SkillGroup 
                  index={idx}
                  open={current === idx} 
                  high={current === idx || previous === idx}
                  setOpen={() => setOpen(current === idx ? null : idx)}
                  skillData={group}
                  key={group.title}/>
              </Col>
            </Row>
          ))
        }
      </MyContainer>
    </Element>
  );
}

export default Skills;
