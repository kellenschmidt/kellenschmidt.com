import React from 'react'
import styled from 'styled-components'

const Chip = styled.div`
  display: inline-block;
  font-size: 1rem;
  padding: 0 1rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 1.5rem;
  margin: 0 .5rem;
  background-color: #d2d2d2;
  color: black;
  min-width: fit-content;

  ${({ theme }) => theme.breakpoints.md`
    font-size: .75rem;
    padding: 0 .75rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 1.5rem;
    margin: 0 .5rem;
    box-shadow: none;
  `}
`
const ChipImg = styled.img`
  float: left;
  margin: 0 0.6rem 0 -1rem;
  border-radius: 50%;
  height: 2.5rem;

  ${({ theme }) => theme.breakpoints.md`
    height: 2rem;
  `}
`

function SkillChip(props) {
  return (
    <Chip style={props.style}>
      <ChipImg src={props.img} />{props.text}
    </Chip>
  );
}

export default SkillChip;
