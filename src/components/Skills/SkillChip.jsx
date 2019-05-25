import React from 'react'
import styled from 'styled-components'

const Chip = styled.div`
  display: inline-block;
  font-size: 16px;
  padding: 0 1rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  background-color: #d2d2d2;
  color: black;
  margin: 0 .5rem;
`
const ChipImg = styled.img`
  float: left;
  margin: 0 0.6em 0 -1em;
  border-radius: 50%;
  height: 2.5rem;
`

function SkillChip(props) {
  return (
    <Chip style={props.style}>
      <ChipImg src={props.img} />{props.text}
    </Chip>
  );
}

export default SkillChip;
