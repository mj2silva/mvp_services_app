import { FC, MouseEventHandler, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    iconToggle?: IconProp,
    onClick: MouseEventHandler,
}

const Toggle:FC<Props> = ({iconToggle, onClick}:Props) => {
  return (
    <div className="dashboard__dropdown-toggle-container" onClick={onClick}>
      <FontAwesomeIcon icon={iconToggle} className="dashboard__dropdown-toggle-icon" />
    </div>
  );
};

export default Toggle;