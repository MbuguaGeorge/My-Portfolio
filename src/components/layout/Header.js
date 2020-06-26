import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  return (
    <div  className="container" style={{padding:'10px'}} >
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Projects">Projects</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;