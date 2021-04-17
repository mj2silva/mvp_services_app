import { FC, useEffect, ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import HeaderMenu from './HeaderMenu';

type Props = {
  children: ReactNode,
}

const Layout:FC<Props> = ({ children }:Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () : void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">

      <Header toggleSidebar={toggleOpen} />
      {/* <HeaderMenu toggleSidebar={toggleOpen} /> */}
      <div className="dashboard">
        <Sidebar isOpen={isOpen} />
        <div>
          { children }
        </div>
        <div className="dashboard__ads"><h1>Anuncios</h1></div>
      </div>
    </div>
  );
};

export default Layout;
