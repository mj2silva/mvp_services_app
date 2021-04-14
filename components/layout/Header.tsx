import Image from 'next/image';
import { FC } from 'react';
import HeaderControls from './HeaderControls';
import SearchBar from './SearchBar';

const Header : FC = () => (
  <header className="header">
    <div className="header__search-bar">
      <SearchBar />
    </div>
    <div className="header__logo">
      <Image src="/img/numeral-logo-header.svg" layout="fill" objectFit="scale-down" />
    </div>
    <div className="header__controls">
      <HeaderControls />
    </div>
  </header>
);

export default Header;
