import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Kellen from '../../assets/kellen.jpg'
import KSLogo from '../../assets/ks-logo.png'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'

const Img = styled.img`
  width: 100%;
  border-radius: 50%;
  padding: .8rem .5rem;
`
const Logo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`
const Title = styled.p`
  font-weight: 700;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 2.625rem;
  line-height: 50px;
  margin: 2rem 0 15px;
  padding: 0 1rem;
`
const TitleSub = styled.p`
  font-family: Muli;
  font-weight: 400;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  font-size: 1.125rem;
  line-height: 24px;
  margin-bottom: 25px;
  padding: 0 2rem;
`
const LastRow = styled(Row)`
  padding-bottom: 15rem;
`

function About(props) {
  return (
    <Element name="about">
      <Container className="text-center" id="about">
        <Row>
          <Col xs={{ size: 2, offset: 5 }}>
            <Fade bottom delay={0}>
              <div className="position-relative">
                <Img src={Kellen} alt="Kellen" />
                <Logo src={KSLogo} alt="Logo" height="75" />
              </div>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Fade bottom delay={200}>
              <Title>I am a strong software developer with a passion for learning and a curiosity with technology.</Title>
            </Fade>
          </Col>
        </Row>
        <LastRow>
          <Col xs={{ size: 10, offset: 1 }}>
            <Fade bottom delay={400}>
              <TitleSub>I love problem solving and am constantly seeking new ways to grow and be challenged. I am a self-motivated learner and am always excited to learn new technologies as is evident by my multitude of awesome personal projects which this website serves to showcase.</TitleSub>
            </Fade>
          </Col>
        </LastRow>
      </Container>
    </Element>
  );
}

export default About;
