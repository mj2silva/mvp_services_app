import { FC } from 'react';
import NavLink from '../common/NavLink';

const LoginNavBar : FC = () => (
  <div className="accountsForm__navBar-container">
    <NavLink
      href="/signup"
      activeClassName="accountsForm__navBar-link accountsForm__navBar-link--active"
      className="accountsForm__navBar-link"
    >
      Registrate
    </NavLink>
    <NavLink
      href="/signin"
      activeClassName="accountsForm__navBar-link accountsForm__navBar-link--active"
      className="accountsForm__navBar-link"
    >
      Inicia Sesión
    </NavLink>
  </div>
);

export default LoginNavBar;
