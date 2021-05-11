import {
  FC, MouseEventHandler, useEffect, useState,
} from 'react';
import {
  faFile, faFileAlt, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Menu from './Menu';

export type ItemSidebar = {
  id: number,
  title: string,
  icon: IconProp,
  iconHover: IconProp,
  status: string,
  subitems: {
    label: string,
    status: string,
    path: string
  }[]
}

export type SiderbarStructure = {
  id: number,
  name: string,
  baseUrl: string,
  items: ItemSidebar[]
}

const defaultSidebar: SiderbarStructure = {
  id: 0,
  name: 'Servicios',
  baseUrl: '/',
  items: [
    {
      id: 1,
      title: 'Asesorías',
      icon: faFile,
      iconHover: faFileAlt,
      status: 'default',
      subitems: [
        {
          label: 'Solicitudes',
          status: 'default',
          path: 'asesorias/solicitudes',
        },
        {
          label: 'Contratos',
          status: 'default',
          path: 'test-academico',
        },
        {
          label: 'Reportes',
          status: 'default',
          path: 'posttest-academico',
        },
      ],
    },
  ],
};

const sidebarCollection: SiderbarStructure[] = [
  {
    name: 'Configuración',
    id: 1,
    baseUrl: 'configuracion',
    items: [
      {
        id: 1,
        title: 'Configuración',
        icon: faFile,
        iconHover: faFileAlt,
        status: 'default',
        subitems: [
          {
            label: 'General',
            status: 'default',
            path: '.configuracion',
          },
          {
            label: 'Seguridad',
            status: 'default',
            path: 'configuracion',
          },
          {
            label: 'Ubicación',
            status: 'default',
            path: 'configuracion',
          },
        ],
      },
    ],
  },
];

type Props = {
  isOpen?: boolean,
  toggleSidebar?: MouseEventHandler,
}

const defaultProps: Partial<Props> = {
  isOpen: false,
  toggleSidebar: null,
};
// Clases de sidebar abierto y cerrado
const openClassName = 'sidebar--open';
const closedClassName = 'sidebar--closed';

const Sidebar: FC<Props> = ({ isOpen, toggleSidebar } : Props) => {
  const router = useRouter();
  const { asPath } = router;
  const [currentSidebar, setCurrentSidebar] = useState<SiderbarStructure>(defaultSidebar);
  const [className, setClassName] = useState(closedClassName);

  const toggleClass = (status): string => ((status === 'active') ? 'default' : 'active');
  useEffect(() => {
    sidebarCollection.forEach((sidebarItem) => {
      if (asPath.startsWith(sidebarItem.baseUrl, 1)) {
        setCurrentSidebar(sidebarItem);
      }
    });
  }, [asPath]);

  const changeSelect = (itemId: number):void => {
    setCurrentSidebar(
      {
        ...currentSidebar,
        items: currentSidebar.items.map((item) => ({
          ...item,
          status: (item.id === itemId) ? toggleClass(item.status) : 'default',
          subitems: item.subitems.map((subitem) => ({
            ...subitem,
            status: (asPath.startsWith(currentSidebar.baseUrl)) ? 'active' : 'default',
          })),
        })),
      },
    );
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
        {currentSidebar.name}
      </h2>
      <ul className="sidebar__block-content">
        {
          currentSidebar.items
            .map((item) => (
              <Menu
                key={currentSidebar.id}
                itemsMenu={item}
                clickHandler={changeSelect}
              />
            ))
        }
      </ul>
    </aside>
  );
};

Sidebar.defaultProps = defaultProps;

export default Sidebar;
