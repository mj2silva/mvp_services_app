import Image from 'next/image';
import { FC } from 'react';
import HeaderControls from './HeaderControls';
import SearchBar from './SearchBar';

const Header : FC = () => (
  <header className="header">
    <div className="header-search-container">
      <SearchBar />
    </div>
    <div className="header-logo-container">
      <Image src="/img/numeral-logo-header.svg" layout="fill" objectFit="scale-down" />
    </div>
    <HeaderControls />
  </header>
);

export default Header;
