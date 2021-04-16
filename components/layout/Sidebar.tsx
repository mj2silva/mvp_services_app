import { FC, useState } from 'react';
import {
  faFile, faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

const itemsForSidebarInitial = {
  title: 'Servicios',
  items: [
    {
      id: 1,
      title: 'Asesorías',
      icon: faFile,
      iconHover: faFileAlt,
      status: 'default',
      items: [
        {
          title: 'Solicitudes',
          status: 'default',
          link: './asesorias/solicitudes',
        },
        {
          title: 'Contratos',
          status: 'default',
          link: 'test-academico',
        },
        {
          title: 'Reportes',
          status: 'default',
          link: 'posttest-academico',
        },
      ],
    },
  ],
};

type Props = {
  location?: string
}

const defaultProps:Partial<Props> = {
  location: '/',
};

const Sidebar:FC<Props> = ({ location }:Props) => {
  const [itemsSidebar, setItemsSidebar] = useState(itemsForSidebarInitial);
  const toggleClass = (status):string => ((status === 'active') ? 'default' : 'active');
  const changeSelect = (itemId):void => {
    setItemsSidebar({
      ...itemsSidebar,
      items: itemsSidebar.items.map((item) => ({
        ...item,
        status: (item.id === itemId) ? toggleClass(item.status) : 'default',
        items: item.items.map((subitem) => ({
          ...subitem,
          status: (subitem.link === location) ? 'active' : 'default',
        })),
      })),
    });
  };
  return (
    <aside className="sidebar">
      <h2 className="sidebar__block-title">
        {itemsSidebar.title}
      </h2>
      <ul className="sidebar__block-content">
        {
            itemsSidebar.items.map((item) => (
              <Menu key={item.id} itemsMenu={item} clickHandler={changeSelect} />
            ))
          }
      </ul>
    </aside>
  );
};

Sidebar.defaultProps = defaultProps;

export default Sidebar;
