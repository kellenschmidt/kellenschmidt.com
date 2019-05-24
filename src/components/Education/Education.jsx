import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import Slide from 'react-reveal/Slide'
import smu from '../../assets/smu.jpg'
import { Element } from 'react-scroll'

const Img = styled.img`
  width: 100%;
  position: absolute;
`
const Triangle = styled.div`
  width: 100%;
  height: 260px;
  background: linear-gradient(to top left, transparent 0%, transparent 50%, rgba(0,0,0,.6) 50%, rgba(0,0,0,.6) 100%);
  position: relative;
  color: white;
  padding: 2.5rem 0 0 2.5rem;
`
const Wrapper = styled.div`
  position: relative;
`

function Education() {
  return (
    <Element name="education">
      <Container>
        <Wrapper>
          <Slide right>
            <Img src={smu} alt="SMU" className="shadow-lg"/>
          </Slide>
          <Slide left>
            <Triangle>
              <h2>Southern Methodist University</h2>
              <h2>B.S. Computer Science, 2019</h2>
              <h2>GPA: 3.81</h2>
            </Triangle>
          </Slide>
        </Wrapper>
      </Container>      
    </Element>
  );
}

export default Education;
