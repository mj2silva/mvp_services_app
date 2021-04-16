import Image from 'next/image';
import { FC } from 'react';
import HeaderControls from './HeaderControls';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

const Header : FC = () => (
  <header className="header">
    <button  className="header__bars">
      
      <FontAwesomeIcon className="" icon={faBars} />
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

export default Header;
