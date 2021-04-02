import { FC, useState } from 'react';

import Toggle from '../Dropdown/Toggle';
import Spinner from '../Loading/Spinner';
import Menu from '../Dropdown/Menu';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    iconToggle?: IconProp,
}

const DropdownContent = (content, status) => (
    (content !== null) ? (
      <div className={`dashboard__menu-container dashboard__menu-container--${status}`}>
        {content}
      </div>
    ) : (
      null
    )
);

const Dropdown : FC<Props> = ({iconToggle}:Props) => {
   
    const [statusDropdown, setStatusDropdown] = useState('hidden');
    const [contentDropdown, setContentDropdown] = useState(null);
    const handlerToggle = (content) => {
        setStatusDropdown((statusDropdown === 'visible') ? 'hidden' : 'visible');
        setContentDropdown(content);
    };
    return (
        <>
          <Toggle iconToggle={iconToggle} onClick={() => handlerToggle(Spinner)} />
          <Toggle iconToggle={iconToggle} onClick={() => handlerToggle(Spinner)} />
          <Toggle iconToggle={iconToggle} onClick={() => handlerToggle(Menu)} />
          {DropdownContent(contentDropdown, statusDropdown)}
        </>
    );
};

export default Dropdown;
