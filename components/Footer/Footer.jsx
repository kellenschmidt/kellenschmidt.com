import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
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
const Background = styled.div`
  background-color: rgba(48,53,70,.05);
  padding-top: 8rem;
  ${({ theme }) => theme.breakpoints.md`
    padding-top: 6rem;
  `}
`

function Footer() {
  return (
    <Background>
      <Container>
        <Row>
          <Col md={5} xs={7}>
            <FooterHeader>Thanks for visiting</FooterHeader>
            <FooterText>Learn more about me and check out my work at these links!</FooterText>
          </Col>
          <Col md={{ size: 3, offset: 1 }} xs={5}>
            <FooterHeader>Links</FooterHeader>
            <FooterLink href="https://res.cloudinary.com/kellenscloud/image/upload/Kellen_Schmidt_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</FooterLink>
            <FooterLink href="https://github.com/kellenschmidt" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
            <FooterLink href="https://linkedin.com/in/kellens" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
          </Col>
        </Row>
        <CopyrightRow>
          <Col xs={12}>
            &copy; 2020 Kellen Schmidt<span className="mx-2">&#124;</span>Version {version || "0"}
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
