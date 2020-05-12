import React from 'react'
import styled from 'styled-components'
import LazyImg from '../LazyImg/LazyImg'

const SkillsWrapper = styled.div`
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.color.primary.normal}, ${theme.color.primary.light})`};
  padding: .25rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`
const SkillsGroup = styled.div`
  background: white;
  border-radius: 5px;
  padding: .5rem .875rem .3rem;
  display: flex;
  align-items: center;
`
const GroupTitle = styled.p`
  margin-bottom: 0;
  font-weight: 500;
`
const GroupLanguages = styled.p`
  margin-bottom: 0;
  font-size: .875rem;
`
const SkillImg = styled(LazyImg)`
  width: 1.75rem;
  height: 100%;
  margin-right: 1rem;
`

function SkillBox(props) {
  return (
    <SkillsWrapper>
      <SkillsGroup>
        <SkillImg src={props.image} />
        <div>
          <GroupTitle>{props.title}</GroupTitle>
          <GroupLanguages>{props.languages.join(" / ")}</GroupLanguages>
        </div>
      </SkillsGroup>
    </SkillsWrapper>
  )
}

export default SkillBox;
