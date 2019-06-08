import React, { useState, useEffect, createRef } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import Slide from 'react-reveal/Slide'
import { Element } from 'react-scroll'
import LazyImg from '../LazyImg/LazyImg'

const Img = styled(LazyImg)`
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
    padding: 1.75rem;
  `}
`
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20rem;

  ${({ theme }) => theme.breakpoints.md`
    margin: 10rem 0;
  `}
`
const EduText = styled.h2`
  margin-bottom: 1rem;
  ${({ theme }) => theme.breakpoints.md`
    font-size: 1.75rem;
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
            <Img src="https://res.cloudinary.com/kellenscloud/image/upload/f_auto,q_auto/v1559747722/smu1" alt="SMU" className="shadow-lg" width={imgSize.width} height={imgSize.height}/>
          </Slide>
          <Slide left>
            <Triangle ref={ref}>
              <EduText>Southern Methodist University</EduText>
              <EduText>B.S. Computer Science, 2019</EduText>
              <EduText className="mb-0">GPA: 3.81</EduText>
            </Triangle>
          </Slide>
        </Wrapper>
      </Container>      
    </Element>
  );
}

export default Education;
