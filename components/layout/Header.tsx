import Image from 'next/image';
import { FC, useState } from 'react';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import { faCaretDown, faComments } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Dropdown/Menu';
import Spinner from '../Loading/Spinner';



const Header : FC = () => {
  
  return(
    <header className="header">
      <div className="header-search-container">
        <SearchBar />
      </div>
      <div className="header-logo-container">
        <Image src="/img/numeral-logo-header.svg" layout="fill" objectFit="scale-down" />
      </div>
      <div className="header-options-container">
        <Dropdown iconToggle={faComments} > <Spinner /> </Dropdown>
        <Dropdown iconToggle={faCaretDown} > <Menu /> </Dropdown>
      </div>
    </header>
  )
};

export default Header;
