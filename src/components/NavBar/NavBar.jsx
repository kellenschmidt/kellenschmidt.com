import React, { useState } from 'react'
import styled from 'styled-components'
import KSLogo from '../../assets/ks-logo.png'
import { Link } from 'react-scroll'
import { Container, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { MediumAndBelow, Large } from '../../responsiveTags'
import { MdMenu } from "react-icons/md";
import { useSpring, animated } from 'react-spring'

const LogoTitle = styled.h4`
  font-weight: 700;
  margin: .5rem .4rem 0;
`
const NavLink = styled(Link)`
  display: inline-block;
  margin: 0 1rem;
  padding: 0 .75rem;
  color: hsla(226.36363636363637,18.64%,23.14%,.8) !important;
  font-weight: 600;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
const HeaderRow = styled(Row)`
  height: 6rem;
  align-items: center;
  display: flex;
`
const MobileNav = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  margin-left: auto;
  height: 100vh;
  transition: width 200ms ease;
  background-color: #1b1f2c;
  z-index: 2;
  padding-top: 6rem;
`
const MobileNavLink = styled(Link)`
  display: block;
  color: white !important;
  font-weight: 600;
  padding: .25rem 1rem;
  
  ${({ theme }) => theme.breakpoints.lg`
    font-size: 2.75rem;
  `}
  ${({ theme }) => theme.breakpoints.md`
    font-size: 2.375rem;
  `}
`
const NavToggle = styled.h2`
  color: #333;
  margin-right: 1rem;
  margin-bottom: 0;
`

function NavBar(props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const spring = useSpring({ width: mobileNavOpen ? "100vw" : "0vw", from: { width: "0vw" } })
  
  const toggleNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <>
      <MobileNav open={mobileNavOpen} onClick={toggleNav} style={spring}>
        <Fade when={mobileNavOpen} opposite delay={mobileNavOpen ? 500 : 0} duration={500}>
          <MobileNavLink to="about" smooth={true} duration={500} offset={-100} onClick={toggleNav} style={{textDecoration: 'underline'}}>About</MobileNavLink>
          <MobileNavLink to="url-shortener" smooth={true} duration={500} offset={-100} onClick={toggleNav}>Experience / Projects</MobileNavLink>
          <MobileNavLink to="education" smooth={true} duration={500} onClick={toggleNav}>Education</MobileNavLink>
          <MobileNavLink to="skills" smooth={true} duration={500} onClick={toggleNav}>Skills</MobileNavLink>
          <MobileNavLink to="contact" smooth={true} duration={500} onClick={toggleNav}>Contact</MobileNavLink>
        </Fade>
      </MobileNav>
      <Container>
        <HeaderRow>
          <Fade duration={500} delay={500}>
            <img src={KSLogo} alt="Logo" height="50" className="ml-3"/>
            <LogoTitle>Kellen Schmidt</LogoTitle>
            <div className="ml-auto">
              <Large>
                <NavLink to="about" smooth={true} duration={500} offset={-100}>About</NavLink>
                <NavLink to="url-shortener" smooth={true} duration={500} offset={-100}>Experience/Projects</NavLink>
                <NavLink to="education" smooth={true} duration={500}>Education</NavLink>
                <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
                <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
              </Large>
              <MediumAndBelow>
                <NavToggle onClick={toggleNav}><MdMenu/></NavToggle>
              </MediumAndBelow>
            </div>
          </Fade>
        </HeaderRow>
      </Container>
    </>
  );
}

export default NavBar;
