import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  icon?: IconProp,
  label?: string,
  to: string,
}

const defaultProps : Partial<Props> = {
  to: '/',
};

const MenuOption:FC<Props> = ({ icon, label, to }:Props) => (
  <Link href={to}>
    <a className="dashboard__menu-option-container">
      <div className="dashboard__menu-option-icon-container">
        <FontAwesomeIcon icon={icon} className="dashboard__menu-option-icon" />
      </div>
      <div className="dashboard_menu-option-label">
        {label}
      </div>
    </a>
  </Link>
);

MenuOption.defaultProps = defaultProps;

export default MenuOption;
