import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import "./Styles.Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ fontSize: 20, width: "90%" }} fluid>
        <Navbar.Brand href="/home">FindEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              justifyContent: "space-between",
              width: "50%",
              marginLeft: 30,
            }}
            navbarScroll
          >
            <Nav.Link href="/home">Anasayfa</Nav.Link>
            <Nav.Link href="/events">Etkinlikleri Listele</Nav.Link>
            <Nav.Link href="/addevents">Etkinlik Ekle</Nav.Link>
            <Nav.Link href="/contact">İletişim</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="/login">
              <Button style={{ fontWeight: "500" }} variant="info">
                Giriş Yap
              </Button>
            </Nav.Link>
            <Nav.Link href="/register">
              <Button style={{ fontWeight: "500" }} variant="info">
                Kayıt Ol
              </Button>
            </Nav.Link>
            <Nav.Link href="/profile">
              <Image height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/992/992659.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
