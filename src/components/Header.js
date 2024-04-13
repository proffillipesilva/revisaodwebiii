import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <Navbar bg='success' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Revisao</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <NavLink to={'login'}>Login</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#features">
                        <NavLink to={'flores'}>Flores</NavLink>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                        <NavLink to={'manage'}>Manage</NavLink>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header