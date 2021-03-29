import Image from 'next/image';
import { FC } from 'react';
import SearchBar from './SearchBar';

const Header:FC = () => (
  <header className="dashboard__header">
    <div className="dashboard__header-search-container">
      <SearchBar />
    </div>
    <div className="dashboard__header-logo-container">
      <Image src="/img/numeral-logo-header.svg" layout="fill" objectFit="scale-down" />
    </div>
    <div className="dashboard__header-options-container" />
  </header>
);

export default Header;
