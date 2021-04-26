import {
  FC, useEffect, ReactNode, useState,
} from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import Header from './Header';

type Props = {
  children: ReactNode,
}

const Layout:FC<Props> = ({ children }:Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () : void => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <div className="container">
      <Header toggleSidebar={toggleOpen} />
      <div className="dashboard">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleOpen} />
        <div>
          { children }
        </div>
        <div className="dashboard__ads"><h1>Anuncios</h1></div>
      </div>
    </div>
  );
};

export default Layout;
