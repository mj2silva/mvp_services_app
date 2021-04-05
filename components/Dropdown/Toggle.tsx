import { FC, MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    iconToggle: IconProp,
    onClick: MouseEventHandler,
}

const Toggle:FC<Props> = ({ iconToggle, onClick }:Props) => (
  <button
    className="dashboard__dropdown-toggle-container"
    onClick={onClick}
    type="button"
  >
    <FontAwesomeIcon icon={iconToggle} className="dashboard__dropdown-toggle-icon" />
  </button>
);

export default Toggle;
