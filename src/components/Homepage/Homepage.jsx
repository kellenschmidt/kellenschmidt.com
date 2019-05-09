import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import mockup1 from '../../assets/mockup1.png'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import KSLogo from '../../assets/ks-logo.png'
import { Element, Link } from 'react-scroll'

const TitleLabel = styled.p`
  font-family: Gilroy;
  font-weight: 600;
  color: rgba(48,53,70,.75);
  font-size: 1.625rem;
  margin: 15px 0;
  line-height: 26px;
`
const Title = styled.p`
  font-family: Gilroy;
  font-weight: 700;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 2.875rem;
  line-height: 50px;
  margin: 5px 0 15px;
`
const TitleSub = styled.p`
  font-family: Muli;
  font-weight: 400;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  font-size: 1.125rem;
  line-height: 24px;
  margin-bottom: 25px;
`
const Line = styled.div`
  width: 60px;
  height: 3px;
  background-color: orange;
  margin-bottom: 15px;
`
const Img = styled.img`
  width: 220%;
`
const LMButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  background-image: linear-gradient(135deg,#f35626,#feab3a); 
  color: white;
  font-weight: bold;
  border: none;
  box-shadow: 0 0 10px 2px hsla(184.14634146341464,99.19%,51.37%,.4);
  margin-right: 1rem;
  `
const CButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  background-color: white;
  color: hsla(202.3404255319149,98.95%,62.75%,1);
  font-weight: bold;
  border: none;
  box-shadow: 0 0 14px 2px rgba(0,0,0,.11);
`
const BlackBG = styled.div`
  background-color: black;
  overflow: hidden;
`
const WhiteBG = styled.div`
  background-color: white;
`
const HeaderRow = styled(Row)`
  height: 6rem;
  align-items: center;
  display: flex;
`
const HeroRow = styled(Row)`
  height: 90vh;
  align-items: center;
  display: flex;
`
const LogoTitle = styled.h4`
  font-weight: 700;
  margin: .5rem .4rem 0;
`
const NavLink = styled(Link)`
  margin: 0 1.75rem;
  color: hsla(226.36363636363637,18.64%,23.14%,.8) !important;
  font-weight: 600;
`

function Homepage() {
  return (
    <BlackBG>
      <Slide bottom duration={500}>
        <WhiteBG>
          <Container>
            <HeaderRow>
              <Fade duration={500} delay={500+0}>
                <img src={KSLogo} alt="Logo" height="50" />
                <LogoTitle>Kellen Schmidt</LogoTitle>
                <div className="ml-auto">
                  <NavLink to="test1" spy={true} smooth={true} duration={500} >Home</NavLink>
                  <NavLink to="test1" spy={true} smooth={true} duration={500} >About</NavLink>
                  <NavLink to="test1" spy={true} smooth={true} duration={500} >Experience</NavLink>
                  <NavLink to="test1" spy={true} smooth={true} duration={500} >Projects</NavLink>
                  <NavLink to="test1" spy={true} smooth={true} duration={500} >Education</NavLink>
                </div>
              </Fade>
            </HeaderRow>
            <HeroRow>
              <Col xs={6}>
                <Fade bottom cascade delay={500+100}>
                  <Line/>
                </Fade>
                <Fade bottom cascade delay={500+300}>
                  <TitleLabel>Hey there, welcome</TitleLabel>
                </Fade>
                <Fade bottom cascade delay={500+500}>
                  <Title>This is Kellen Schmidt's personal website.</Title>
                </Fade>
                <Fade bottom cascade delay={500+700}>
                  <TitleSub>I'm a software engineer with a particular interest in full-stack web development. Check out my awesome projects and work experience!</TitleSub>
                </Fade>
                <Fade bottom cascade delay={500+900}>
                  <div>
                    <LMButton>Learn More</LMButton>
                    <CButton>Contact</CButton>
                  </div>
                </Fade>
              </Col>
              <Col xs={6}>
                <Fade right delay={500+1100} duration={1250}>
                  <Img src={mockup1} alt="Mockup"/>
                </Fade>
              </Col>
            </HeroRow>
          </Container>
        </WhiteBG>
      </Slide>
    </BlackBG>
  );
}

export default Homepage;
