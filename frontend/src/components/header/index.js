import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap";
import "./Styles.Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <img
        height={75}
        width={150}
        className="logo-header"
        src="https://t4.ftcdn.net/jpg/01/34/81/83/360_F_134818360_o6AaEjnTewYEydXi8pdkgyOufTVUlJkP.jpg"
      />
      <div className="ul-header">
        <ul>
          <li>
            <a className="link-a-header" href="/home">
              Anasayfa
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="link-a-header" href="/events">
              Etkinlikler
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="link-a-header" href="/contact">
              İletişim
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="link-a-header" href="/home">
              Hakkımızda
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
