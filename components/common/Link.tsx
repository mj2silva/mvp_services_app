import Link, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';

type Props = LinkProps & {
  children: ReactNode,
  className?: string,
  onClick?: (event) => void;
  tabIndex?: number;
  isBlank?: boolean;
}

const CustomLink : FC<Props> = ({
  children, href, className, onClick, tabIndex, isBlank,
} : Props) => (
  <Link href={href} passHref={isBlank}>
    <a
      onClick={onClick}
      className={className}
      role={(onClick ? 'button' : null)}
      tabIndex={tabIndex}
      onKeyUp={onClick}
      target={(isBlank) ? '_blank' : ''}
      rel={(isBlank) ? 'noreferrer' : ''}
    >
      { children }
    </a>
  </Link>
);

CustomLink.defaultProps = {
  className: null,
  onClick: null,
  tabIndex: 0,
  isBlank: false,
};

export default CustomLink;
