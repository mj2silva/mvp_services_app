import { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode,
  to?: string
}

const defaultProps:Partial<Props> = {
  to: '/',
};

const LinkSidebar:FC<Props> = ({ children, to }:Props) => (
  <li className="sidebar__block-item-subitem">
    <Link href={to}>
      <a className="sidebar__block-item-subitem-link">{children}</a>
    </Link>
  </li>
);

LinkSidebar.defaultProps = defaultProps;

export default LinkSidebar;
