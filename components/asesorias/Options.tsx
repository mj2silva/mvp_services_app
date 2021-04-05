import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode,
  title: string
}

const Options:FC<Props> = ({ children, title }:Props) => (
  <div className="options">
    <h1 className="options__title">{title}</h1>
    <div className="options__cards">
      {children}
    </div>
  </div>
);

export default Options;
