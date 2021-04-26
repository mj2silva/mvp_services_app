import { FC, useEffect, useState } from 'react';
import {
  faFile, faFileAlt,faMapMarkerAlt,faShieldAlt,faCog
} from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ItemSidebar = {
  id: number,
  title: string,
  icon: IconProp,
  iconHover: IconProp,
  status: string,
  path: string,
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
      path: 'asesorias',
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
        title: 'General',
        icon: faCog,
        iconHover: faCog,
        status: 'no-menu',
        path: '/configuracion',
        subitems: [
        ],
      },
      {
        id: 2,
        title: 'Seguridad',
        icon: faShieldAlt,
        iconHover: faShieldAlt,
        status: 'no-menu',
        path: '/configuracion',
        subitems: [
        ],
      },
      {
        id: 3,
        title: 'Ubicación',
        icon: faMapMarkerAlt,
        iconHover: faMapMarkerAlt,
        status: 'no-menu',
        path: '/configuracion',
        subitems: [
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
  const toggleClass = (status):string => {
    if(status === 'active') return 'default';
    else if (status === 'no-menu') return 'no-menu';
    return 'active';
    //(status === 'active') ? 'default' : 'active'
  };
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
          status: (item.id === itemId) ? toggleClass(item.status) : item.status,
          subitems: item.subitems.map((subitem) => ({
            ...subitem,
            status: (asPath.startsWith(sidebar.baseUrl)) ? 'active' : 'default',
          })),
        })),
      }
    );
  };
  return (
    <aside className="sidebar">
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
