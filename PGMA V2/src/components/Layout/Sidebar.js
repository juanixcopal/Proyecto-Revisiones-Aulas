import sidebarBgImage from 'assets/img/sidebar/sidebar-Uneat.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FcDepartment } from 'react-icons/fc'
import { FaBuilding } from 'react-icons/fa'
import {
  MdChromeReaderMode,
  MdAssignmentTurnedIn,
  MdComputer,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: '/', name: 'Plantas', exact: true, Icon: FaBuilding },
  { to: '/chromebooks', name: 'Chromebooks', exact: false, Icon: MdComputer },
  { to: '/inventario', name: 'Inventario', exact: false, Icon: MdAssignmentTurnedIn },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src="Circle Logo EIA.png"
                width="45"
                height="35"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                PGMA <FcDepartment fontSize={"30px"}/>
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
