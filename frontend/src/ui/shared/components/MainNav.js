import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faHome } from '@fortawesome/free-solid-svg-icons'
import navColor from './Nav.module.css'

export function MainNav () {

  return (
    <>
      <Navbar expand="md">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/profile-page">
                <FontAwesomeIcon className={navColor.color} icon={faClipboardCheck}/>
              </Link>
              <Link to="/">
                <FontAwesomeIcon className={navColor.color} icon={faHome}/>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}