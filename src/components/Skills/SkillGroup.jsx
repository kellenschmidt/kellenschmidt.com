import React, { useRef } from 'react'
import styled, { withTheme } from 'styled-components'
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { Container, Row, Col } from 'reactstrap'
import SkillChip from './SkillChip'

const data = [
  {
    name: 'Rare Wind',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: 200
  },
  {
    name: 'Saint Petersburg',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    height: 400
  },
  {
    name: 'Deep Blue',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    height: 400
  },
  {
    name: 'Ripe Malinka',
    description: '#f093fb → #f5576c',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    height: 400
  },
  {
    name: 'Perfect White',
    description: '#fdfbfb → #ebedee',
    css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
    height: 400
  },
  {
    name: 'Near Moon',
    description: '#5ee7df → #b490ca',
    css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
    height: 400
  },
  {
    name: 'Wild Apple',
    description: '#d299c2 → #fef9d7',
    css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    height: 200
  },
  {
    name: 'Ladoga Bottom',
    description: '#ebc0fd → #d9ded8',
    css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
    height: 400
  },
  {
    name: 'Sunny Morning',
    description: '#f6d365 → #fda085',
    css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    height: 200
  },
  {
    name: 'Lemon Gate',
    description: '#96fbc4 → #f9f586',
    css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
    height: 400
  },
  {
    name: 'Salt Mountain',
    description: ' #FFFEFF → #D7FFFE',
    css: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
    height: 200
  },
  {
    name: 'New York',
    description: ' #fff1eb → #ace0f9',
    css: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
    height: 400
  },
  {
    name: 'Soft Grass',
    description: ' #c1dfc4 → #deecdd',
    css: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
    height: 400
  },
  {
    name: 'Japan Blush',
    description: ' #ddd6f3 → #faaca8',
    css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
    height: 200
  }
]

const SkillsWrapper = styled(animated.div)`
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: top, height;
  width: 100%;
  transition: transform 0.1s ease-in-out;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.color.main.normal}, ${theme.color.main.light})`};
  padding: .5rem;
  border-radius: 1.3rem;

  &:hover {
    transform: ${({ open }) => open ? 'scale(1.0)' : 'scale(1.025)'};
  }
`
const SkillsBox = styled.div`
  border-radius: 1rem;
  border: solid .5rem transparent
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
const GridBox = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  width: 100%;
  height: 100%;
`
const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
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

function SkillGroup(props) {
  const { open, setOpen, skillData } = props;

  const springRef = useRef()
  const spring = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { height: '20%', top: `${props.index * 26.25}%`, position: 'absolute' },
    to: { height: open ? '100%' : '20%', top: open ? '0%' : `${props.index * 26.25}%` }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? skillData.skills : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

  return (
    <>
    <SkillsWrapper style={{ ...spring, zIndex: props.high ? 2 : 1 }} onClick={setOpen} open={open}>
      <SkillsBox>
        <GridBox>
          {transitions.map(({ item, key, props }) => (
            <Item key={key} score={item.score} style={{ ...props, background: `lightblue url(https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_120/${item.image}-chip) no-repeat left` }} />
          ))}
        </GridBox>
        {/* {
          !open && (
            <Container>
              <Row>
                <Col xs={5}>
                  <h1 className="m-0">{skillData.title}</h1>
                </Col>
                <SkillsCol xs={7}>
                  {
                    skillData.skills.map(skill => (
                      <SkillChip key={skill.name} style={{ ...props }} img={`https://res.cloudinary.com/kellenscloud/image/upload/c_scale,f_auto,q_auto,w_120/${skill.image}-chip`} text={skill.name}/>
                    ))
                  }
                </SkillsCol>
              </Row>
            </Container>
          )
        } */}
      </SkillsBox>
    </SkillsWrapper>
    </>
  );
}

export default withTheme(SkillGroup);
