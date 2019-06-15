import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import { Title as TitleImp, TitleSub as TitleSubImp } from '../Project/Project'
import { LargeAndAbove } from '../responsiveTags';

const Title = styled(TitleImp)`
  margin-bottom: 1rem;
  padding: 0 1rem;
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 2rem;
    line-height: 2.25rem;
  `}
`
const TitleSub = styled(TitleSubImp)`
  padding: 0 8rem;
  font-size: 1.25rem;
  ${({ theme }) => theme.breakpoints.md`
    padding: 0rem;
    font-size: 1rem;
    line-height: 1.375rem;
  `}
`
const LastRow = styled(Row)`
  padding-bottom: 15rem;
  ${({ theme }) => theme.breakpoints.md`
    padding-bottom: 10rem;
  `}
`
const Highlight = styled.span`
  color: ${({ theme }) => theme.color.primary.normal}
`

function About(props) {
  return (
    <Element name="about">
      <Container className="text-center" id="about">
        <LastRow>
          <Col xs={12}>
            <Fade bottom cascade delay={150} duration={750}>
              <div>
                <Title>Always seeking new challenges I'm marked by <Highlight>passion</Highlight> for learning and <Highlight>curiosity</Highlight> with technology.</Title>
                <TitleSub>
                  <LargeAndAbove>I love problem solving and am constantly seeking new ways to grow. I am a self-motivated learner and am always excited to explore new technologies as is evident by my multitude of awesome personal and professional projects which this website showcases.</LargeAndAbove>
                </TitleSub>
              </div>
            </Fade>
          </Col>
        </LastRow>
      </Container>
    </Element>
  );
}

export default About
