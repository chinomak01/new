import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaBaby, FaChair, FaChild, FaHandHoldingHeart, FaInfoCircle, FaSmileBeam, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Sidebar.css';

const Sidebar = () => (
  <Nav className="flex-column sidebar bg-light p-3">
    <Nav.Item>
      <Link to="section1" smooth={true} duration={500} className="nav-link">
        <FaBaby className="me-2 icon" /> Componentes de la leche materna
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section2" smooth={true} duration={500} className="nav-link">
        <FaChair className="me-2 icon" /> Técnica correcta para dar de lactar
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section3" smooth={true} duration={500} className="nav-link">
        <FaChild className="me-2 icon" /> Posiciones para lactancia
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section4" smooth={true} duration={500} className="nav-link">
        <FaHandHoldingHeart className="me-2 icon" /> Importancia de la lactancia materna
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section5" smooth={true} duration={500} className="nav-link">
        <FaSmileBeam className="me-2 icon" /> Ventajas y Desventajas de la Lactancia Materna: Para la madre
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section6" smooth={true} duration={500} className="nav-link">
        <FaClipboardList className="me-2 icon" /> Ventajas y Desventajas de la Lactancia Materna: Para el lactante
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section7" smooth={true} duration={500} className="nav-link">
        <FaInfoCircle className="me-2 icon" /> Datos claves o curiosos sobre la lactancia materna
      </Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="section8" smooth={true} duration={500} className="nav-link">
        <FaInfoCircle className="me-2 icon" /> Encuesta
      </Link>
    </Nav.Item>
  </Nav>
);

export default Sidebar;
