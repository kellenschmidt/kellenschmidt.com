import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { MyContainer as MyContainerI, BigRow as BigRowI, TitleSuper as TitleSuperI, Title as TitleI, TitleSub as TitleSubI, PrimaryButton as PrimaryButtonI, SecondaryButton as SecondaryButtonI, MockImg as MockImgI } from './Project'
import NavBar from '../NavBar/NavBar';
import { Small, MediumAndAbove } from '../responsiveTags'

const Background = styled.div`
  background-image: linear-gradient(45deg, ${({ theme }) => `${theme.color.primary.normal}, ${theme.color.primary.light}`});
  color: white;
`
const MyContainer = styled(MyContainerI)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.md`
    min-height: 76vh;
    align-items: initial;
    position: relative;
    overflow: hidden;
  `}
`
const BigRow = styled(BigRowI)`
  ${({ theme }) => theme.breakpoints.md`
    margin: 0;
    padding-top: 2vh;
    align-items: initial;
  `}
`
const HeroImgRow = styled(Row)`
  position: absolute;
  bottom: ${({ shiftRow }) => shiftRow ? "-5%" : "0"};
  left: -3%;
  width: 114%;
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
    margin-top: 0rem;
  `}
`
const Spacer = styled.div`
  height: 66vw;
`

function Hero(props) {
  const delay = 500

  // Negative 'bottom' (as in HeroImgRow) doesn't trigger Intersection Observer
  // Temporarily set 'bottom' to 0 at render start to trigger Intersection Observer
  const [shiftRow, setShiftRow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShiftRow(true), 1000)
  }, [])

  return (
    <Background>
      <NavBar inverse/>
      <MyContainer>
        <BigRow noGutters>
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
                <PrimaryButton color={props.color} onClick={props.primaryButton.onClick}>{props.primaryButton.text}</PrimaryButton>
                <SecondaryButton color={props.color} onClick={props.secondaryButton.onClick}>{props.secondaryButton.text}</SecondaryButton>
              </div>
            </Fade>
          </Col>
          <MediumAndAbove>
            <Col xs={12} md={6}>
              <Fade right delay={delay + 800} duration={1250}>
                <MockImg src={props.image} alt="Project mockup" />
              </Fade>
            </Col>
          </MediumAndAbove>
          <Small>
            <Col xs={12}>
              <Spacer></Spacer>
            </Col>
          </Small>
        </BigRow>
        <Small>
          <HeroImgRow shiftRow={shiftRow}>
            <Fade bottom delay={delay + 800} duration={1250}>
              <MockImg src={props.image} alt="Project mockup" />
            </Fade>
          </HeroImgRow>
        </Small>
      </MyContainer>
    </Background>
  );
}

export default Hero;
