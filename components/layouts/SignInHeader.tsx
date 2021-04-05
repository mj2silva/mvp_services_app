import Image from 'next/image';
import { FC } from 'react';

const SignInHeader : FC = () => (
  <header className="header">
    <div className="header-logo-container">
      <Image src="/img/numeral-logo-header.svg" layout="fill" objectFit="scale-down" />
    </div>
  </header>
);

export default SignInHeader;
