import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { Element } from 'react-scroll'
import SkillBox from './SkillBox'

const skillGroups = [
  {
    title: "Frontend Javascript Frameworks",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/reactjs-skill",
    languages: ["React", "Vue.js", "Angular 9"]
  },
  {
    title: "Backend Frameworks",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/nodejs-skill",
    languages: ["Node.js", "Spring"]
  },
  {
    title: "Web Design & Development",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/html-skill",
    languages: ["HTML", "CSS", "Javscript (ES6+)"]
  },
  {
    title: "DevOps",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/docker-skill",
    languages: ["Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Cloud",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/aws-skill",
    languages: ["AWS", "Azure", "GCP"]
  },
  {
    title: "Databases",
    image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/database-skill",
    languages: ["PostgreSQL", "MySQL", "NoSQL"]
  },
  // {
  //   title: "Other",
  //   image: "https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_80/git-skill",
  //   languages: ["GraphQL", "GitHub", "Shell scripting"]
  // },
]

const SkillsTitle = styled.p`
  font-weight: 700;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 2.625rem;
  line-height: 3.125rem;
  text-align: center;
  margin-bottom: 2rem;
  ${({ theme }) => theme.breakpoints.md`
    margin-bottom: 1rem;
  `}
`

function Skills(props) {
  return (
    <Element name="skills">
      <Container>
        <SkillsTitle>Skills</SkillsTitle>
        <Row>
          {skillGroups.map(group => (
            <Col xs={12} md={6} xl={4} key={group.title}>
              <SkillBox title={group.title} image={group.image} languages={group.languages}/>
            </Col>
          ))}
        </Row>
      </Container>
    </Element>
  );
}

export default Skills;
