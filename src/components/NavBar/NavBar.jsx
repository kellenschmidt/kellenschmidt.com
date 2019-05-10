import React from 'react'
import styled from 'styled-components'
import KSLogo from '../../assets/ks-logo.png'
import { Link } from 'react-scroll'
import { Container, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade'

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

function NavBar(props) {
  return (
    <Container>
      <HeaderRow>
        <Fade duration={500} delay={500}>
          <img src={KSLogo} alt="Logo" height="50" />
          <LogoTitle>Kellen Schmidt</LogoTitle>
          <div className="ml-auto">
            <NavLink to="about" smooth={true} duration={500} offset={-100}>About</NavLink>
            <NavLink to="url-shortener" smooth={true} duration={500} offset={-100}>Experience/Projects</NavLink>
            <NavLink to="education" smooth={true} duration={500}>Education</NavLink>
            <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
            <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
          </div>
        </Fade>
      </HeaderRow>
    </Container>
  );
}

export default NavBar;
