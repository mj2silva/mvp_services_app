import Image from 'next/image';
import { FC } from 'react';


const Header : FC = () => (
  <header className="header header--center">
    <div className="header-logo-container">
      <Image src="/img/numeral-logo-header.svg" layout="fill" objectFit="scale-down" />
    </div>
    <div className="header-options-container" />
  </header>
);

export default Header;