import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import CustomLink from './Link';

type Props = LinkProps & {
  activeClassName: string,
  className: string,
  children: ReactNode,
}

const NavLink : FC<Props> = (props : Props) => {
  const {
    className, activeClassName, href, children,
  } = props;
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(router.asPath.toString() === href.toString());
    console.log({ path: router.asPath, href });
  }, [router.asPath, href]);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CustomLink {...props} className={isActive ? activeClassName : className}>
      { children}
    </CustomLink>
  );
};

export default NavLink;
