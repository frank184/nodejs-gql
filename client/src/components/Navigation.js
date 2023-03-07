import React, { useState } from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { LinkContainer  } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation() {
  const [theme] = useTheme();
  const [darkMode, setDarkMode] = useState(theme === themes.dark);

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" className="bg-body border-bottom">
      <Container >
        <LinkContainer to="/">
          <Navbar.Brand>
            <FontAwesomeIcon icon={['fas', 'stream']} />
            &nbsp;
            TASK Hub
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          <Nav>
            <LinkContainer to="/sign-up">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sign-in">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <Navbar.Text style={{marginLeft: '10px'}}>
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  <Button type="button" 
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          size="sm" 
                          style={{'--bs-btn-border-color': 'none'}}
                          onClick={() => {
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                          }}>
                    <FontAwesomeIcon icon={['fas', darkMode ? 'lightbulb' : 'moon']} />
                  </Button>
                )}
              </ThemeContext.Consumer>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;