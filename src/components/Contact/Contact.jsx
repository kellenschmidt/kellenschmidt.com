import React from 'react'
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import { Title } from '../Project/Project'
import { Element } from 'react-scroll'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ColorContainer = styled(Container)`
  background-image: ${({ color, theme }) => `linear-gradient(135deg, ${theme.color[color].normal}, ${theme.color[color].light})`};
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-top: 20rem;
`
const CenterRow = styled(Row)`
  justify-content: center
  color: white;
`
const Avatar = styled.a`
  border-radius: 50%
  height: 3.5rem;
  width: 3.5rem;
  background-color: white;
  color: ${({ color }) => color} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 1rem;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  ${({ theme }) => theme.breakpoints.sm`
    margin: .7rem;
  `}
`

function Contact() {
  return (
    <Element name="contact">
      <ColorContainer fluid color="main">
        <CenterRow>
          <Fade>
            <Title className="text-white">Let's Connect!</Title>
          </Fade>
        </CenterRow>
        <CenterRow>
          <Fade>
            <Avatar color="#0077B5" href="https://linkedin.com/in/kellens" target="_blank" rel="noopener"><FaLinkedin/></Avatar>
            <Avatar color="black" href="https://github.com/kellenschmidt" target="_blank" rel="noopener"><FaGithub/></Avatar>
            <Avatar color="#ea4335" href="mailto: kellenschmidt31@gmail.com"><MdEmail/></Avatar>
            <Avatar color="#833ab4" href="https://instagram.com/kellen_schmidt31" target="_blank" rel="noopener"><FaInstagram/></Avatar>
          </Fade>
        </CenterRow>
      </ColorContainer>
    </Element>
  );
}

export default Contact;
