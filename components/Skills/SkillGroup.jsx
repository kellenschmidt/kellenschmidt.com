import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { Container, Row, Col } from 'reactstrap'
import SkillChip from './SkillChip'
import Fade from 'react-reveal/Fade'
import { MediumAndAbove } from '../responsiveTags'

const SkillsWrapper = styled(animated.div)`
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: top, height;
  width: 100%;
  transition: transform 0.1s ease-in-out;
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.color.primary.normal}, ${theme.color.primary.light})`};
  padding: .45rem;
  border-radius: 1.4rem;
  position: absolute;
  left: 0;
  &:hover {
    transform: ${({ open }) => open ? 'scale(1.0)' : 'scale(1.025)'};
  }
  ${({ theme }) => theme.breakpoints.lg`
    &:hover {
      transform: scale(1.0);
    }
  `}
  ${({ theme }) => theme.breakpoints.md`
    padding: .35rem;
    border-radius: 1.25rem;
  `}
`
const SkillsBox = styled.div`
  border-radius: 1rem;
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`
const GridBox = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-gap: 1.5rem;
  padding: 1.5rem;
  will-change: width, height;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.breakpoints.md`
    grid-gap: 1rem;
  `}
`
const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary.complement};
  background-image: ${({ image }) => `url(https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_120/${image}-chip)`};
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: .365rem;
  will-change: transform, opacity;
  width: ${({ score }) => `${score}%`};
`
const SkillsCol = styled(Col)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ChipContainer = styled(Container)`
  position: absolute;
  z-index: 1;
`
const GroupTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`

function SkillGroup(props) {
  const { open, setOpen, skillData } = props;

  const springRef = useRef()
  const spring = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { height: '20%', top: `${props.index * 26.25}%` },
    to: { height: open ? '100%' : '20%', top: open ? '0%' : `${props.index * 26.25}%` }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? skillData.skills : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / skillData.skills.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <SkillsWrapper style={{ ...spring, zIndex: props.high ? 2 : 1 }} onClick={setOpen} open={open}>
      <SkillsBox>
        {
          !open && (
            <ChipContainer>
              <Fade delay={500} duration={500}>
                <Row>
                  <MediumAndAbove>
                    <Col md={4} lg={5}>
                      <GroupTitle>{skillData.title}</GroupTitle>
                    </Col>
                  </MediumAndAbove>
                  <SkillsCol xs={12} md={8} lg={7}>
                    {
                      skillData.skills.map(skill => (
                        <SkillChip key={skill.name} style={{ ...props }} img={`https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_120/${skill.image}-chip`} text={skill.name}/>
                      ))
                    }
                  </SkillsCol>
                </Row>
              </Fade>
            </ChipContainer>
          )
        }
        <GridBox>
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props }} image={item.image} score={item.score} />
          ))}
        </GridBox>
      </SkillsBox>
    </SkillsWrapper>
  );
}

export default SkillGroup;
