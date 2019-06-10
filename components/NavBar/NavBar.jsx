import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Container, Row, Col } from 'reactstrap'
import { MediumAndBelow, LargeAndAbove } from '../responsiveTags'
import { FaLinkedin, FaFilePdf, FaBars } from "react-icons/fa";

const LogoTitle = styled.h3`
  font-family: 'Rock Salt', sans-serif;
  margin: 0;
  color: white;
`
const NavLink = styled(Link)`
  display: inline-block;
  margin: 0 1rem;
  padding: 0 .75rem;
  color: white !important;
  font-weight: 600;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
const HeaderRow = styled(Row)`
  height: 10vh;
  min-height: 5rem;
  align-items: center;
  display: flex;
`
const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-left: auto;
  height: 100vh;
  width: 100vw;
  background-color: #1b1f2c;
  z-index: 2;
  transform: translate3d(${({ open }) => open ? "0%" : "100%"}, 0, 0);
  transition: transform 300ms;
  padding-top: 9rem;
  color: white !important;

  ${({ theme }) => theme.breakpoints.lg`
    font-size: 2.75rem;
  `}
  ${({ theme }) => theme.breakpoints.md`
    font-size: 2.125rem;
    padding-top: 6rem;
  `}
`
const MobileNavLink = styled(Link)`
  display: block;
  font-weight: 600;
  padding: .25rem 0;
`
const NavToggle = styled.h3`
  color: white;
  margin-right: 1rem;
  margin-bottom: 0;
`
const ColorBar = styled.div`
  width: 15rem;
  height: .5rem;
  border-radius: 1.25rem;
  background-image: ${({ theme }) => `linear-gradient(45deg, ${theme.color.primary.normal}, ${theme.color.primary.light})`};
  margin: .75rem 0 1.25rem;
`
const Icon = styled.a`
  margin-right: 1.5rem;
  color: white !important;
`
const MyCol = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`

function NavBar(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  
  const toggleNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <>
      <MobileNav open={mobileNavOpen} onClick={toggleNav}>
        <Container>
          <Row noGutters>
            <Col>
              <MobileNavLink to="about" smooth={true} duration={750} offset={-120} onClick={toggleNav}>About</MobileNavLink>
              <MobileNavLink to="url-shortener" smooth={true} duration={750} offset={-40} onClick={toggleNav}>Experience / Projects</MobileNavLink>
              <MobileNavLink to="education" smooth={true} duration={750} offset={-160} onClick={toggleNav}>Education</MobileNavLink>
              <MobileNavLink to="skills" smooth={true} duration={750} offset={-160} onClick={toggleNav}>Skills</MobileNavLink>
              <MobileNavLink to="contact" smooth={true} duration={750} offset={-160} onClick={toggleNav}>Contact</MobileNavLink>
              <ColorBar />
              <Icon href="https://linkedin.com/in/kellens" target="_blank" rel="noopener noreferrer" aria-label="Go to Kellen's Linkedin"><FaLinkedin/></Icon>
              <Icon href="https://res.cloudinary.com/kellenscloud/image/upload/Kellen_Schmidt_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Kellen's Resume"><FaFilePdf/></Icon>
            </Col>
          </Row>
        </Container>
      </MobileNav>
      <Container>
        <HeaderRow>
          <MyCol>
            <LogoTitle>Kellen Schmidt</LogoTitle>
            <LargeAndAbove>
              <NavLink to="about" smooth={true} duration={750} offset={-320}>About</NavLink>
              <NavLink to="url-shortener" smooth={true} duration={750} offset={-260}>Experience/Projects</NavLink>
              <NavLink to="education" smooth={true} duration={750} offset={-350}>Education</NavLink>
              <NavLink to="skills" smooth={true} duration={750} offset={-300}>Skills</NavLink>
              <NavLink to="contact" smooth={true} duration={750}>Contact</NavLink>
            </LargeAndAbove>
            <MediumAndBelow>
              <NavToggle open={mobileNavOpen} onClick={toggleNav}><FaBars/></NavToggle>
            </MediumAndBelow>
          </MyCol>
        </HeaderRow>
      </Container>
    </>
  );
}

export default NavBar;
