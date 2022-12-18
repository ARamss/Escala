import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logolight from "../../assets/images/logo-light-gradient.png";

const NavbarAdmin = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logolight} style={{ width: 135 }} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/admin' activeStyle>
             Editar
          </NavLink>
          <NavLink to='/config' activeStyle>
            Configurar
          </NavLink>
          <NavLink to='/apply' activeStyle>
            Aplicar
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/entrar'>Salir</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarAdmin;
