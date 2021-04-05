import { FC } from 'react';
import Link from 'next/link';
import {
  faFileAlt, faCalendar, faQuestionCircle, faCog, faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import MenuOption from '../Dropdown/MenuOption';

const user = {
  id: '0',
  fullname: 'Academia Numeral',
  profileLink: './',
  profilePicture: '/img/numeral_logo.svg',
};

const optionsForMenu = {
  options: [
    {
      icon: faFileAlt,
      label: 'Mis solicitudes',
      to: '',
    },
    {
      icon: faCalendar,
      label: 'Mi calendario',
      to: '',
    },
    {
      icon: faQuestionCircle,
      label: 'Ayuda',
      to: '',
    },
    {
      icon: faCog,
      label: 'Configuración',
      to: '/configuracion',
    },
    {
      icon: faSignOutAlt,
      label: 'Salir',
      to: '',
    },
  ],
};

const Menu: FC = () => (
  <>
    <div className="dashboard__menu-profile-container">
      <div className="dashboard__menu-profile-picture-container">
        <img src={user.profilePicture} alt="" className="dashboard__menu-profile-picture" />
      </div>
      <div className="dashboard__menu-profile-content">
        <span className="dashboard__menu-profile-name">
          {user.fullname}
        </span>
        <Link href={user.profileLink}>
          <a className="dashboard__menu-profile-link">
            Ver tu perfil
          </a>
        </Link>
      </div>
    </div>
    <div className="dashboard__menu-options-container">
      {
          optionsForMenu.options.map((option) => (
            <MenuOption icon={option.icon} to={option.to} label={option.label} />
          ))
        }
    </div>
  </>
);

export default Menu;
