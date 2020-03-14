import React from 'react';
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import Navbar from 'react-bootstrap/NavBar';

export default function App() {
    return (
        <div className="App">
            <NavBar bg="pimary" variant="dark" expand="lg">
                <NavBar.Brand href="/">Website Name</NavBar.Brand>
                <Navbar.Toggle aria-controls="collapse" />
                <Navbar.Collapse react-html-id="collapse">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/section1/">Section 1</Nav.Link>
                        <Nav.Link href="/section2/">Section 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </NavBar>
        </div>
    );
}
