import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';
import { FcApproval } from 'react-icons/fc'

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Plataforma creada por el Equipo de Intervención Ágil <FcApproval fontSize={"20px"} />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;