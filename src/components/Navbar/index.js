import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  ThemeContainer,
} from "./NavbarStyledComponent";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { FaBars, FaFreeCodeCamp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <FaFreeCodeCamp size="2rem" /> <Span>Mohsin R.</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          {isOpen ? (
            <AiOutlineClose
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
            <GitHubIcon style={{ marginLeft: "6px" }} fontSize="small" />
          </GitHubButton>
        </ButtonContainer>
        <ThemeContainer onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
        </ThemeContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github
              <GitHubIcon style={{ marginLeft: "6px" }} fontSize="small" />
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
