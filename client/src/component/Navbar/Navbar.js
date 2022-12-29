import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logolight from "../../assets/images/logo-dark-gradient.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logolight} style={{ width: 135 }} alt='logo' />
        </NavLink>
        <NavMenu>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/entrar'>Applicar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
