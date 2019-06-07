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
  padding: 0 2rem;

  ${({ theme }) => theme.breakpoints.md`
    padding: 0rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
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
        <Row>
          <Col xs={12}>
            <Fade bottom delay={200}>
              <Title>I am a software developer with a <Highlight>passion</Highlight> for learning and a <Highlight>curiosity</Highlight> with technology.</Title>
            </Fade>
          </Col>
        </Row>
        <LastRow>
          <Col xs={{ size: 10, offset: 1 }}>
            <Fade bottom delay={400}>
              <LargeAndAbove>
                <TitleSub>I love problem solving and am constantly seeking new ways to grow and be challenged. I am a self-motivated learner and am always excited to learn new technologies as is evident by my multitude of awesome personal projects which this website serves to showcase.</TitleSub>
              </LargeAndAbove>
            </Fade>
          </Col>
        </LastRow>
      </Container>
    </Element>
  );
}

export default About;
