import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import Header from './Header';
import SignInLayout from './SignInLayout';

type Props = {
  children: ReactNode,
}

const Layout:FC<Props> = ({ children }:Props) => {
  const path = useRouter().asPath;
  const isSignIn = path.includes('signin') || path.includes('signup');
  if (isSignIn) {
    return <SignInLayout>{ children }</SignInLayout>;
  }
  return (
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
};
export default Layout;
