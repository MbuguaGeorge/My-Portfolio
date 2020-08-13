import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  return (
    <div  className="header" style={{padding:'10px'}} >
        <div className="container">
          <Nav>
            <NavItem>
              <NavLink href="/" style={{color: 'red', fontSize: '1.3rem'}} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About" style={{color: 'red', fontSize: '1.3rem'}} >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects" style={{color: 'red', fontSize: '1.3rem'}} >Projects</NavLink>
            </NavItem>
          </Nav>
        </div>
    </div>
  );
}

export default Header;