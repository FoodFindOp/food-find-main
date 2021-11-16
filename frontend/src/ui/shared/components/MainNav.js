import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import navStyles from './Nav.module.css'

export function MainNav() {

  return(
    <>
      <Navbar expand="md">
        <Container>
            <Nav className="ms-auto">
              <Nav.Link>
              <Link className={navStyles.color} to="/profile-page">To Profile</Link>
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>

    </>
  )
}