import { FC, ReactNode } from 'react';
import { Student } from '../../lib/types';
import Header from './Header';

type Props = {
  children: ReactNode,
  mensaje?: string,
  student?:Student
}

const defaultProps:Partial<Props> = {
  mensaje: 'holis',
  student: {
    name: '-',
    lastname: '-',
  },
};

const Layout:FC<Props> = ({ children, mensaje, student }:Props) => (
  <>
    <div className="container">
      <Header />
      <div className="dashboard-container">
        { student.name }
        { children }
      </div>
    </div>
  </>
);

Layout.defaultProps = defaultProps;

export default Layout;
