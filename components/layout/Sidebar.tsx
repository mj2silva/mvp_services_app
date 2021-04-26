import {
  FC, MouseEventHandler, useEffect, useState,
} from 'react';
import {
  faFile, faFileAlt, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          link: '/asesorias/solicitudes',
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
  location?: string,
  isOpen?: boolean,
  toggleSidebar?: MouseEventHandler,
}

// Clases de sidebar abierto y cerrado
const openClassName = 'sidebar--open';
const closedClassName = 'sidebar--closed';

const defaultProps:Partial<Props> = {
  location: '/',
  isOpen: false,
  toggleSidebar: null,
};

const Sidebar:FC<Props> = ({ location, isOpen, toggleSidebar } : Props) => {
  const [itemsSidebar, setItemsSidebar] = useState(itemsForSidebarInitial);

  const [className, setClassName] = useState(closedClassName);
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

  useEffect(() => {
    if (isOpen) setClassName(openClassName);
    else setClassName(closedClassName);
  }, [isOpen]);

  return (
    <aside className={`sidebar ${className}`}>
      <header className="headerMenu">
        <div className="headerMenu__logo">
          <Image src="/img/numeral-logo-header.svg" layout="fill" className="headerMenu__logo" />
        </div>
        <button onClick={toggleSidebar} type="button" className="headerMenu__close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </header>

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
