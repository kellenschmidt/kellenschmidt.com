import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import LazyImg from '../LazyImg/LazyImg'

export const MyContainer = styled(Container)`
  margin-bottom: 15rem;
  ${({ theme }) => theme.breakpoints.md`
    margin-bottom: 10rem;
  `}
`
export const BigRow = styled(Row)`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  padding: .75rem 1.75rem;
  border-radius: .5rem;
  font-weight: bold;
  border: none;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
export const PrimaryButton = styled(Button)`
  color: white;
  background-image: linear-gradient(45deg,#f35626,#feab3a); 
  box-shadow: 0 0 10px 2px hsla(184.14634146341464,99.19%,51.37%,.4);
  margin-right: 1rem;
  ${({ color, theme }) => css`
    background-image: linear-gradient(45deg, ${theme.color[color].normal}, ${theme.color[color].light}); 
    box-shadow: 0 0 10px 2px ${theme.color[color].light};
  `}
`
export const SecondaryButton = styled(Button)`
  color: ${({ color, theme }) => theme.color[color].normal};
  background-color: white;
  box-shadow: 0 0 14px 2px rgba(0,0,0,.11);
`
export const TitleSuper = styled.p`
  font-weight: 600;
  color: rgba(48,53,70,.75);
  margin: 1rem 0;
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
  font-size: 2.625rem;
  line-height: 3.125rem;
  margin: .3125rem 0 1rem;
  ${({ theme }) => theme.breakpoints.lg`
    font-size: 2rem;
    line-height: 2.25rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.75rem;
    line-height: 1.875rem;
  `}
`
export const TitleSub = styled.p`
  font-family: Muli;
  font-weight: 400;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
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
  height: .1875rem;
  background-color: ${({ color, theme }) => theme.color[color].normal};
  margin-bottom: 1rem;
`
// export const MockImg = styled.img`
export const MockImg = styled(LazyImg)`
  width: 100%;
  ${({ theme }) => theme.breakpoints.md`
    margin-top: 2.5rem;
  `}
`

function Project(props) {
  return (
    <Element name={props.id}>
      <MyContainer id={props.id}>
        <BigRow>
          <Col xs={12} md={{size: 6, order: props.reverse ? 2 : 1, offset: props.reverse ? 1 : 0}}>
            <Fade bottom delay={0} duration={750}>
              <Line color={props.color}/>
              <TitleSuper>{props.superText}</TitleSuper>
            </Fade>
            <Fade bottom opposite delay={150} duration={750}>
              <Title>{props.titleText}</Title>
            </Fade>
            <Fade bottom delay={300} duration={750}>
              <TitleSub>{props.subText}</TitleSub>
            </Fade>
            <Fade bottom delay={450} duration={750}>
              <div>
                <PrimaryButton color={props.color} onClick={props.primaryButton.onClick}>{props.primaryButton.text}</PrimaryButton>
                {
                  props.secondaryButton && (
                    <SecondaryButton color={props.color} onClick={props.secondaryButton.onClick}>{props.secondaryButton.text}</SecondaryButton>
                  )
                }
              </div>
            </Fade>
          </Col>
          <Col xs={{size: props.verticalMock ? 8 : 12, offset: props.verticalMock ? 2 : 0}} md={{size: 4, order: props.reverse ? 1 : 2, offset: 1}}>
            <Fade right={!props.reverse} left={props.reverse} delay={600} duration={1000}>
              <MockImg src={props.image} alt={`${props.titleText} mockup`}/>
            </Fade>
          </Col>
        </BigRow>
      </MyContainer>
    </Element>
  );
}

export default Project;
