import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Toggle from '../Dropdown/Toggle';

type Props = {
    iconToggle: IconProp,
    children: ReactNode,
    onClick: () => void,
    openedId: number,
    id: number,
}

const Dropdown : FC<Props> = (props : Props) => {
  const {
    iconToggle, children, onClick, openedId, id,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(openedId === id);
  }, [openedId, id]);
  return (
    <>
      <Toggle iconToggle={iconToggle} onClick={onClick} />
      <div
        className={`dashboard__menu-container dashboard__menu-container--${(isOpen) ? 'visible' : 'hidden'}`}
      >
        {children}
      </div>
    </>
  );
};

export default Dropdown;
