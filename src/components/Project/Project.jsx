import React, { useEffect, createRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'

const BigRow = styled(Row)`
  height: ${({ hero }) => hero ? "90vh" : "initial"};
  align-items: center;
  display: flex;
  margin-bottom: 15rem;
  
  ${({ theme, hero }) => theme.breakpoints.md`
    margin-bottom: 12rem;
    margin-top: ${hero ? "2rem" : "0"};
  `}
  ${({ theme }) => theme.breakpoints.sm`
    margin-bottom: 8rem;
    height: initial;
  `}
`
export const PrimaryButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  border: none;
  margin-right: 1rem;
  background-image: linear-gradient(135deg,#f35626,#feab3a); 
  box-shadow: 0 0 10px 2px hsla(184.14634146341464,99.19%,51.37%,.4);
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  ${({ color, theme }) => css`
    background-image: linear-gradient(135deg, ${theme.color[color].normal}, ${theme.color[color].light}); 
    box-shadow: 0 0 10px 2px ${theme.color[color].light};
  `}
`
export const SecondaryButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  background-color: white;
  color: ${({ color, theme }) => theme.color[color].normal};
  font-weight: bold;
  border: none;
  box-shadow: 0 0 14px 2px rgba(0,0,0,.11);
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
export const TitleSuper = styled.p`
  font-weight: 600;
  color: rgba(48,53,70,.75);
  margin: 15px 0;
  font-size: 1.5rem;
  line-height: 1.5rem;

  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.125rem;
    line-height: 1.375rem;
  `}
`
export const Title = styled.p`
  font-weight: 700;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: ${({ hero }) => hero ? "2.875rem" : "2.625rem"};
  line-height: 3.125rem;
  margin: 5px 0 15px;
  
  ${({ theme }) => theme.breakpoints.lg`
    font-size: 2rem;
    line-height: 2.25rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.625rem;
    line-height: 1.875rem;
  `}
`
export const TitleSub = styled.p`
  font-family: Muli;
  font-weight: 400;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 25px;
  
  ${({ theme }) => theme.breakpoints.md`
    font-size: 1.125rem;
    line-height: 1.5rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1rem;
    line-height: 1.375rem;
  `}
`
export const Line = styled.div`
  width: 3.75rem;
  height: 3px;
  background-color: ${({ color, theme }) => theme.color[color].normal};
  margin-bottom: 1rem;
`
export const MockImg = styled.img`
  width: ${({ hero }) => hero ? "220%" : "100%"};

  ${({ theme }) => theme.breakpoints.md`
    margin-top: 2.5rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    width: 100%;
  `}
`

function Project(props) {
  const delay = props.hero ? 500 : 0
  const imgRef = createRef()
  const [verticalPhoto, setVerticalPhoto] = useState(true)

  useEffect(() => {
    setVerticalPhoto(imgRef.current.naturalHeight > imgRef.current.naturalWidth)
  }, [imgRef])

  return (
    <Element name={props.id}>
      <Container id={props.id}>
        <BigRow hero={props.hero ? 1 : 0}>
          <Col xs={12} md={{size: 6, order: props.reverse ? 2 : 1, offset: props.reverse ? 1 : 0}}>
            <Fade bottom delay={delay + 0}>
              <Line color={props.color}/>
              <TitleSuper>{props.superText}</TitleSuper>
            </Fade>
            <Fade bottom opposite delay={delay + 200}>
              <Title hero={props.hero}>{props.titleText}</Title>
            </Fade>
            <Fade bottom delay={delay + 400}>
              <TitleSub>{props.subText}</TitleSub>
            </Fade>
            <Fade bottom delay={delay + 600}>
              <div>
                <PrimaryButton color={props.color}>{props.primaryButton.text}</PrimaryButton>
                <SecondaryButton color={props.color}>{props.secondaryButton.text}</SecondaryButton>
              </div>
            </Fade>
          </Col>
          <Col xs={{size: verticalPhoto ? 8 : 12, offset: verticalPhoto ? 2 : 0}} md={{size: props.hero ? 6 : 4, order: props.reverse ? 1 : 2, offset: props.hero ? 0 : 1}}>
            <Fade right={!props.reverse} left={props.reverse} delay={delay + 800} duration={1250}>
              <MockImg src={props.image} alt="Project mockup" hero={props.hero} ref={imgRef}/>
            </Fade>
          </Col>
        </BigRow>
      </Container>
    </Element>
  );
}

export default Project;
