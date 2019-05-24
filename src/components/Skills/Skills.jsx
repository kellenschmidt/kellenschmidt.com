import React, { useState } from 'react'
import styled, {withTheme} from 'styled-components'
import { Container } from 'reactstrap'
import { Element } from 'react-scroll'
import SkillGroup from './SkillGroup';

const skillGroups = [
  {
    title: "Frontend Web Dev",
    skills: [
      {
        name: "React",
        image: "",
      }
    ],
  },
  {
    title: "Backend Web Dev",
    skills: [
      {
        name: "React",
        image: "",
      }
    ],
  },
  {
    title: "Dev Ops",
    skills: [
      {
        name: "React",
        image: "",
      }
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "React",
        image: "",
      }
    ],
  },
]

const MyContainer = styled(Container)`
  margin-top: 20rem;
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
            <SkillGroup 
              index={idx}
              open={current === idx} 
              high={current === idx || previous === idx}
              setOpen={() => setOpen(current === idx ? null : idx)}
              skillData={group}
              key={group.title} />
          ))
        }
      </MyContainer>
    </Element>
  );
}

export default withTheme(Skills);
