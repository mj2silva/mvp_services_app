import {
  FC, FocusEventHandler, MouseEventHandler, ReactNode, useState,
} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Toggle from '../Dropdown/Toggle';

type Props = {
    iconToggle: IconProp,
    children: ReactNode,
}

const Dropdown : FC<Props> = (props : Props) => {
  const { iconToggle, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onClick: MouseEventHandler = () => {
    setIsOpen(true);
  };

  const onBlur: FocusEventHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Toggle iconToggle={iconToggle} onClick={onClick} onBlur={onBlur} />
      <div
        className={`dashboard__menu-container dashboard__menu-container--${(isOpen) ? 'visible' : 'hidden'}`}
      >
        {children}
      </div>
    </>
  );
};

export default Dropdown;
