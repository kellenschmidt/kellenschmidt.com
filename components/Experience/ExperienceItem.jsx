import React from 'react'
import styled from 'styled-components'
import LazyImg from '../LazyImg/LazyImg'

const Circle = styled.div`
  border-radius: 50%;
  background: black;
  width: 1rem;
  height: 1rem;
  margin-right: 1.25rem;
`
const Wrapper = styled.div`
`
const CircleAndLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.65rem;
`
const CompanyLogo = styled(LazyImg)`
  width: ${({size}) => size};
 
`
const ExperienceInfo = styled.div`
  margin-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 3.25rem;
`
const CompanyText = styled.h1`
  font-weight: 600;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 2rem;
  margin: 0rem 0 0.25rem;
  /*${({ theme }) => theme.breakpoints.lg`
    font-size: 2rem;
    line-height: 2.25rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.75rem;
    line-height: 1.875rem;
  `}*/
`
const PositionText = styled.h2`
  font-weight: 400;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  font-size: 1.6125rem;
  margin-bottom: 1rem;
  /*${({ theme }) => theme.breakpoints.lg`
    font-size: 2rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.75rem;
  `}*/
`
const DatesText = styled.h3`
  font-weight: 500;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  /*${({ theme }) => theme.breakpoints.lg`
    font-size: 2rem;
  `}
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.75rem;
  `}*/
`

function ExperienceItem(props) {
  return (
    <Wrapper>
      <CircleAndLogo>
        <Circle/>
        <CompanyLogo src={props.logo} size={props.logoWidth}/>
      </CircleAndLogo>
      <ExperienceInfo>
        <CompanyText>{props.company}</CompanyText>
        <PositionText>{props.position}</PositionText>
        <DatesText>{props.startDate} - {props.endDate}</DatesText>
        <DatesText>{props.location}</DatesText>
      </ExperienceInfo>
    </Wrapper>
  );
}

export default ExperienceItem;
