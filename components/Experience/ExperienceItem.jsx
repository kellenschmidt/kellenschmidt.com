import React from 'react'
import styled from 'styled-components'
import LazyImg from '../LazyImg/LazyImg'

const OuterTriangle = styled.div`
  width: 0; 
  height: 0; 
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent; 
  border-left: 16px solid ${({ theme }) => theme.color.primary.normal}; 
  margin-right: 0.75rem;
`
const InnerTriangle = styled.div`
  position: relative;
  top: -4px;
  left: -12px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid white;
`
const Wrapper = styled.div`
`
const TriangleAndLogo = styled.div`
  display: flex;
  align-items: center;
`
const CompanyLogo = styled(LazyImg)`
  width: ${({size}) => size};
`
const ExperienceInfo = styled.div`
  margin-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: ${({ last }) => last ? "0rem" : "3.25rem"};
  ${({ theme }) => theme.breakpoints.sm`
    margin-top: 0.75rem;
  `}
`
const CompanyText = styled.h1`
  font-weight: 600;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 2rem;
  margin: 0rem 0 0.25rem;
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.75rem;
  `}
`
const PositionText = styled.h2`
  font-weight: 400;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  font-size: 1.6125rem;
  margin-bottom: 1rem;
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1.5rem;
  `}
`
const DatesText = styled.h3`
  font-weight: 500;
  color: hsla(226.36363636363637,18.64%,23.14%,1);
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  ${({ theme }) => theme.breakpoints.sm`
    font-size: 1rem;
  `}
`
const LocationText = styled(DatesText)`
  margin-bottom: 0;
`

function ExperienceItem(props) {
  return (
    <Wrapper>
      <TriangleAndLogo>
        <OuterTriangle>
          <InnerTriangle />
        </OuterTriangle>
        <CompanyLogo src={props.logo} size={props.logoWidth}/>
      </TriangleAndLogo>
      <ExperienceInfo last={props.last}>
        <CompanyText>{props.company}</CompanyText>
        <PositionText>{props.position}</PositionText>
        <DatesText>{props.startDate} - {props.endDate}</DatesText>
        <LocationText>{props.location}</LocationText>
      </ExperienceInfo>
    </Wrapper>
  );
}

export default ExperienceItem;
