import { FC, useEffect, useState } from 'react';
import {
  FC, MouseEventHandler, useEffect, useState,
} from 'react';
import {
  faFile, faFileAlt, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './Menu';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

export type Sidebar = {
  id: number, 
  name: string,
  baseUrl: string,
  items: ItemSidebar[]
}

const defaultSidebar:Sidebar = {
  id: 0,
  name: 'Servicios',
  baseUrl:'/',
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
          path: '/asesorias/solicitudes',
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
  ]
}

const sidebarCollection:Sidebar[] = [
  {
    name: 'Configuración',
    id: 1,
    baseUrl:'configuracion',
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
    ]
  }
];

const Sidebar:FC = () => {
  const router = useRouter();
  const { asPath } = router;
  const [sidebar, setSidebar] = useState<Sidebar>(defaultSidebar);
  const [sidebarInitial, setSidebarInitial] = useState<Sidebar>(sidebar);
  const toggleClass = (status):string => ((status === 'active') ? 'default' : 'active');
  useEffect(() => {
    sidebarCollection.map((sidebar) => {
      if(asPath.startsWith(sidebar.baseUrl, 1)){
        setSidebar(sidebar);
      }
    })
  }, [asPath]);

  const changeSelect = (itemId):void => {
    setSidebar(
      {
        ...sidebar,
        items: sidebar.items.map((item) => ({
          ...item,
          status: (item.id === itemId) ? toggleClass(item.status) : 'default',
          subitems: item.subitems.map((subitem) => ({
            ...subitem,
            status: (asPath.startsWith(sidebar.baseUrl)) ? 'active' : 'default',
          })),
        })),
      }
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
        {sidebar.name}
      </h2>
      <ul className="sidebar__block-content">
        {
          sidebar.items.map((item)=> {
            return <Menu key={sidebar.id} itemsMenu={item} clickHandler={changeSelect} />
          })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
