import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import mockup1 from '../../assets/mockup1.png'

const TitleLabel = styled.p`
  font-family: Gilroy;
  font-weight: 700;
  color: gray;
  font-size: 1.625rem;
  margin-bottom: 0;
`
const Title = styled.p`
  font-family: Gilroy;
  font-weight: 700;
  color: black;
  font-size: 2.875rem;
  line-height: 1.35;
`
const TitleSub = styled.p`
  font-family: Gilroy;
  font-weight: 400;
  color: gray;
  font-size: 1.25rem;
`
const Line = styled.div`
  width: 60px;
  height: 3px;
  background-color: orange;
  margin-bottom: 15px;
`
const Img = styled.img`
  width: 220%;
`
const LMButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  background-image: linear-gradient(90deg,hsla(205.66666666666666,98.9%,64.31%,1),hsla(184.14634146341464,99.19%,51.37%,1));
  color: white;
  font-weight: bold;
  border: none;
  box-shadow: 0 0 10px 2px hsla(184.14634146341464,99.19%,51.37%,.4);
  margin-right: 1rem;
  `
  
  const CButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  background-color: white
  color: linear-gradient(90deg,hsla(205.66666666666666,98.9%,64.31%,1),hsla(184.14634146341464,99.19%,51.37%,1));
  font-weight: bold;
  border: none;
  box-shadow: 0 0 14px 2px rgba(0,0,0,.11);
`

function Homepage() {
  return (
    <Container>
      <Row className="d-flex vh-100 align-items-center">
        <Col xs={6}>
          <Line/>
          <TitleLabel>Hey there, welcome</TitleLabel>
          <Title>This is Kellen Schmidt's Personal Website.</Title>
          <TitleSub>I'm a software engineer with a particular interest in full-stack web development. Check out my awesome projects and work experience!</TitleSub>
          <LMButton>Learn More</LMButton>
          <CButton>Contact</CButton>
        </Col>
        <Col xs={6}>
          <Img src={mockup1} alt="Mockup"/>
        </Col>
      </Row>

    </Container>
  );
}

export default Homepage;
