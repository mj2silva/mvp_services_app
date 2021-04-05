import { FC, ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode,
}

const Authentication:FC<Props> = ({ children }:Props) => (
  <div className="container">
    <Header />
    {/* Account header y todo lo que no va a cambiar */}
    {children}
  </div>
);

export default Authentication;
