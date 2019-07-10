import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Minesweeper from  'react-minesweeper'
import "react-minesweeper/lib/minesweeper.css"
import Tada from 'react-reveal/Tada'
import { LargeAndAbove } from '../responsiveTags'
import { version } from '../../version'

const FooterText = styled.a`
  display: block;
  color: hsla(226.36363636363637,18.64%,23.14%,.7) !important;
  line-height: 1.375rem;
  padding: .1875rem 0; 
`
const FooterLink = styled(FooterText)`
  &:hover{
    text-decoration: underline !important;
    cursor: pointer;
  }
`
const FooterHeader = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: rgba(48,53,70,.7) !important;
`
const CopyrightRow = styled(Row)`
  text-align: center;
  font-family: Muli;
  color: hsla(226.36363636363637,18.64%,23.14%,.7);
  opacity: .55;
  padding: 2rem 0 4rem;
`
const MinesweeperHeader = styled(FooterHeader)`
  &:hover {
    cursor: pointer;
  }
`
const Background = styled.div`
  background-color: rgba(48,53,70,.05);
  padding-top: 8rem;
`

function Footer() {
  const [minesweeperKey, setMinesweeperKey] = useState(0)
  const [minesweeperTitle, setMinesweeperTitle] = useState("Minesweeper")

  const resetMinesweeper = () => {
    setMinesweeperKey(minesweeperKey + 1)
    setMinesweeperTitle("Minesweeper")
  }

  return (
    <Background>
      <Container>
        <Row>
          <Col md={5} xs={6}>
            <FooterHeader>Thanks for visiting</FooterHeader>
            <FooterText>Learn more about me and check out my work at these links!</FooterText>
          </Col>
          <Col md={{ size: 3, offset: 1 }} xs={6}>
            <FooterHeader>Links</FooterHeader>
            <FooterLink href="https://res.cloudinary.com/kellenscloud/image/upload/Kellen_Schmidt_Resume.pdf" target="_blank" rel="noopener noreferrer">Resumé</FooterLink>
            <FooterLink href="https://github.com/kellenschmidt" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
            <FooterLink href="https://linkedin.com/in/kellens" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
            <FooterLink href="https://kellenschmidt.com/url" target="_blank" rel="noopener noreferrer">URL Shortener</FooterLink>
          </Col>
          <LargeAndAbove>
            <Col xs={3} className="text-center">
              <Tada spy={minesweeperTitle}>
                <MinesweeperHeader onClick={resetMinesweeper}>{minesweeperTitle}</MinesweeperHeader>
              </Tada>
              <Minesweeper 
                key={minesweeperKey}
                onWin={() => setMinesweeperTitle("You win! (Click to reset)")}
                onLose={() => setMinesweeperTitle("You lose! (Click to reset)")}
                bombChance={0.15}
                width={7}
                height={6} />
            </Col>
          </LargeAndAbove>
        </Row>
        <CopyrightRow>
          <Col xs={12}>
            &copy; 2019 Kellen Schmidt<span className="mx-2">&#124;</span>Version {version || "0"}
          </Col>
          <Col xs={12}>
            Design inspired by <a href="https://elementsixdesign.com" target="_blank" rel="noopener noreferrer" style={{color: 'inherit'}}>Element Six Design</a>
          </Col>
        </CopyrightRow>
      </Container>
    </Background>
  );
}

export default Footer
