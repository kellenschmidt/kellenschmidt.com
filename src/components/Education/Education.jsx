import React, { useState, useEffect, createRef } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import Slide from 'react-reveal/Slide'
import smu from '../../assets/smu.jpg'
import { Element } from 'react-scroll'

const Img = styled.img`
  position: absolute;
  object-fit: cover;
`
const Triangle = styled.div`
  width: 100%;
  background: linear-gradient(to top left, transparent 0%, transparent 50%, rgba(0,0,0,.6) 50%, rgba(0,0,0,.6) 100%);
  position: relative;
  color: white;
  padding: 2.5rem;

  ${({ theme }) => theme.breakpoints.md`
    background: rgba(0,0,0,.6);
  `}
`
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20rem;

  ${({ theme }) => theme.breakpoints.md`
    margin: 10rem 0;
  `}
`

function Education() {
  const ref = createRef()
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    const { clientWidth, clientHeight } = ref.current || {}
    setImgSize({ width: clientWidth, height: clientHeight})
  }, [ref])

  return (
    <Element name="education">
      <Container>
        <Wrapper>
          <Slide right>
            <Img src={smu} alt="SMU" className="shadow-lg" width={imgSize.width} height={imgSize.height}/>
          </Slide>
          <Slide left>
            <Triangle ref={ref}>
              <h2>Southern Methodist University</h2>
              <h2>B.S. Computer Science, 2019</h2>
              <h2 className="mb-0">GPA: 3.81</h2>
            </Triangle>
          </Slide>
        </Wrapper>
      </Container>      
    </Element>
  );
}

export default Education;
