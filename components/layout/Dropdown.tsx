import { FC, ReactNode, useState } from 'react';

import Toggle from '../Dropdown/Toggle';
import Spinner from '../Loading/Spinner';
import Menu from '../Dropdown/Menu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    iconToggle?: IconProp,
    children: ReactNode,
}

const DropdownContent = (content, status) => (
    /*(content !== null) ? (
      <div className={`dashboard__menu-container dashboard__menu-container--${status}`}>
        {content}
      </div>
    ) : (
      null
    )*/
    <div className={`dashboard__menu-container dashboard__menu-container--${status}`}>
        {content}
    </div>
);

const Dropdown : FC<Props> = ({iconToggle,children}:Props) => {
   
    const [statusDropdown, setStatusDropdown] = useState('hidden');
    const [contentDropdown, setContentDropdown] = useState(children);
    const handlerToggle = (content) => {
        setStatusDropdown((statusDropdown === 'visible') ? 'hidden' : 'visible');
        //setContentDropdown(content);
    };
    return (
        <>
          <Toggle iconToggle={iconToggle} onClick={() => handlerToggle(children)} />
          {DropdownContent(children, statusDropdown)}
        </>
    );
};

export default Dropdown;
