import { FC } from 'react';
import { faBell, faCaretDown, faComments } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import Menu from '../Dropdown/Menu';
import Spinner from '../Loading/Spinner';

const headerControlsItems = [
  {
    id: 1,
    icon: faComments,
    content: <Spinner />,
  },
  {
    id: 2,
    icon: faBell,
    content: <Spinner />,
  },
  {
    id: 3,
    icon: faCaretDown,
    content: <Menu />,
  },
];

const HeaderControls : FC = () => (
  <>
    {
        headerControlsItems.map((item) => (
          <Dropdown
            key={`dd-${item.id}`}
            iconToggle={item.icon}
          >
            { item.content }
          </Dropdown>
        ))
      }
  </>
);

export default HeaderControls;
