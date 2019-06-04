import React from 'react'
import styled from 'styled-components'
import { Container, Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { BigRow as BigRowI, TitleSuper as TitleSuperI, Title as TitleI, TitleSub as TitleSubI, PrimaryButton as PrimaryButtonI, SecondaryButton as SecondaryButtonI, MockImg as MockImgI } from './Project'
import NavBar from '../NavBar/NavBar';

const Background = styled.div`
  background-image: linear-gradient(45deg, ${({ theme }) => `${theme.color.primary.normal}, ${theme.color.primary.light});`}
  color: white;
`
const BigRow = styled(BigRowI)`
  height: 70vh;
  align-content: space-evenly;
  ${({ theme }) => theme.breakpoints.sm`
    height: 90vh;
  `}
`
const TitleSuper = styled(TitleSuperI)`
  color: rgba(251,253,255,.8);
`
const Title = styled(TitleI)`
  font-size: 2.875rem;
  color: white;
`
const TitleSub = styled(TitleSubI)`
  color: hsla(0,0%,100%,.75);
`
const PrimaryButton = styled(PrimaryButtonI)`
  background: white;
  color: ${({ theme }) => theme.color.primary.normal};
  box-shadow: 0 0 14px 2px rgba(0,0,0,.11);
  font-size: 1.125rem;
`
const SecondaryButton = styled(SecondaryButtonI)`
  color: white;
  background: hsla(0,0%,100%,.27);
  font-size: 1.125rem;
`
const MockImg = styled(MockImgI)`
  width: 210%;
  ${({ theme }) => theme.breakpoints.md`
    width: 100%;
  `}
`

function Hero(props) {
  const delay = 500

  return (
    <Background>
      <NavBar inverse/>
      <Container>
        <BigRow>
          <Col xs={12} md={6}>
            <Fade bottom delay={delay + 0}>
              <TitleSuper>{props.superText}</TitleSuper>
            </Fade>
            <Fade bottom opposite delay={delay + 200}>
              <Title>{props.titleText}</Title>
            </Fade>
            <Fade bottom delay={delay + 400}>
              <TitleSub>{props.subText}</TitleSub>
            </Fade>
            <Fade bottom delay={delay + 600}>
              <div>
                <PrimaryButton color={props.color}>{props.primaryButton}</PrimaryButton>
                <SecondaryButton color={props.color}>{props.secondaryButton}</SecondaryButton>
              </div>
            </Fade>
          </Col>
          <Col xs={12} md={6}>
            <Fade right delay={delay + 800} duration={1250}>
              <MockImg src={props.image} alt="Project mockup" />
            </Fade>
          </Col>
        </BigRow>
      </Container>
    </Background>
  );
}

export default Hero;
