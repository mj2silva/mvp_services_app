import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HeaderControls from './HeaderControls';
import SearchBar from './SearchBar';

type Props = {
  toggleSidebar?: MouseEventHandler,
}

const defaultProps: Partial<Props> = {
  toggleSidebar: null,
};

const Header : FC<Props> = (props: Props) => {
  const { toggleSidebar } = props;
  return (
    <header className="header">
      <button type="button" onClick={toggleSidebar} className="header__bars">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="header__search-bar">
        <SearchBar />
      </div>
      <div className="header__logo-container">
        <Image src="/img/numeral-logo-header.svg" layout="fill" className="header__logo" />
      </div>
      <div className="header__controls">
        <HeaderControls />
      </div>
    </header>
  );
};

Header.defaultProps = defaultProps;

export default Header;
