import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';
import { FcServices } from 'react-icons/fc'
import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Plataforma creada por el Equipo de Intervención Ágil <FcServices fontSize={"20px"} />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
