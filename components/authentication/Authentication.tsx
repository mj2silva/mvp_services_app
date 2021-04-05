import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode,
}
const Authentication:FC<Props> = ({ children }:Props) => (
  <div>
    {/* Account header y todo lo que no va a cambiar */}
    {children}
  </div>
);

export default Authentication;
