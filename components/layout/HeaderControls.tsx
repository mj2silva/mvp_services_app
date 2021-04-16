import { FC, useState } from 'react';
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

const HeaderControls : FC = () => {
  const [openedDropdown, setOpenedDropdown] = useState(0);
  return (
    <>
      {
        headerControlsItems.map((item) => {
          const toggleDropdown = () : void => {
            if (openedDropdown === item.id) setOpenedDropdown(0);
            else setOpenedDropdown(item.id);
          };
          return (
            <Dropdown
              key={`dd-${item.id}`}
              onClick={toggleDropdown}
              openedId={openedDropdown}
              id={item.id}
              iconToggle={item.icon}
            >
              { item.content }
            </Dropdown>
          );
        })
      }
    </>
  );
};

export default HeaderControls;
