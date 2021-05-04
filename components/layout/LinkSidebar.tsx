import { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  status?: string,
  children: ReactNode,
  to?: string
}

const defaultProps:Partial<Props> = {
  status: 'default',
  to: '/',
};

const LinkSidebar:FC<Props> = ({ children, to, status }:Props) => (
  <li className="sidebar__block-item-subitem">
    <Link href={to}>
      <a className={`sidebar__block-item-subitem-link ${status}`}>{children}</a>
    </Link>
  </li>
);

LinkSidebar.defaultProps = defaultProps;

export default LinkSidebar;
