import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type Props = {
  children: ReactNode,
}

const Layout:FC<Props> = ({ children }:Props) => (
  <div className="container">
    <Header />
    <div className="dashboard-container">
      <Sidebar />
      <div>
        { children }
      </div>
      <div><h1>Anuncios</h1></div>
    </div>
  </div>
);

export default Layout;
