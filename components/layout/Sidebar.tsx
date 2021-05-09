import { FC, useEffect, useState } from 'react';
import {
  faFile, faFileAlt, faMapMarkerAlt, faShieldAlt, faCog,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Menu from './Menu';

export type ItemSidebar = {
  id: string,
  title: string,
  icon: IconProp,
  iconHover: IconProp,
  status: string,
  path: string,
  subitems: {
    id: string,
    label: string,
    status: string,
    path: string
  }[]
}

export type BuilderSidebar = {
  id: string,
  name: string,
  baseUrl: string,
  items: ItemSidebar[]
}

const defaultSidebar:BuilderSidebar = {
  id: '0',
  name: 'Servicios',
  baseUrl: '/',
  items: [
    {
      id: '1',
      title: 'Asesorías',
      icon: faFile,
      iconHover: faFileAlt,
      status: 'default',
      path: 'asesorias',
      subitems: [
        {
          id: '1',
          label: 'Solicitudes',
          status: 'default',
          path: 'asesorias/solicitudes',
        },
        {
          id: '2',
          label: 'Contratos',
          status: 'default',
          path: 'test-academico',
        },
        {
          id: '3',
          label: 'Reportes',
          status: 'default',
          path: 'posttest-academico',
        },
      ],
    },
    {
      id: '2',
      title: 'Test',
      icon: faFile,
      iconHover: faFileAlt,
      status: 'no-menu',
      path: 'test',
      subitems: [
        {
          id: '1',
          label: 'test subitem',
          status: 'default',
          path: 'test/subitem',
        },
      ],
    },
  ],
};

const sidebarCollection:BuilderSidebar[] = [
  {
    name: 'Configuración',
    id: '1',
    baseUrl: 'configuracion',
    items: [
      {
        id: '1',
        title: 'General',
        icon: faCog,
        iconHover: faCog,
        status: 'default',
        path: '',
        subitems: [
        ],
      },
      {
        id: '2',
        title: 'Seguridad',
        icon: faShieldAlt,
        iconHover: faShieldAlt,
        status: 'no-menu',
        path: '/',
        subitems: [
        ],
      },
      {
        id: '3',
        title: 'Ubicación',
        icon: faMapMarkerAlt,
        iconHover: faMapMarkerAlt,
        status: 'no-menu',
        path: '/',
        subitems: [
        ],
      },
    ],
  },
];

const Sidebar: FC = () => {
  const router = useRouter();
  const { asPath } = router;
  const [sidebar, setSidebar] = useState<BuilderSidebar>(defaultSidebar);
  const toggleClass = (status):string => {
    if (status === 'active') return 'default';
    if (status === 'no-menu') return 'no-menu';
    return 'active';
    // (status === 'active') ? 'default' : 'active'
  };
  useEffect(() => {
    sidebarCollection.forEach((sdb) => {
      if (router.asPath.startsWith(sdb.baseUrl, 1)) {
        setSidebar(sdb);
      } else {
        setSidebar(defaultSidebar);
      }
    });
  }, [router.asPath]);

  const changeSelect = (itemId: string):void => {
    setSidebar(
      {
        ...sidebar,
        items: sidebar.items.map((item) => ({
          ...item,
          status: (item.id === itemId) ? toggleClass(item.status) : item.status,
          subitems: item.subitems.map((subitem) => ({
            ...subitem,
            status: (asPath.startsWith(`/${subitem.path}`)) ? 'active' : 'default',
          })),
        })),
      },
    );
  };
  return (
    <aside className="sidebar">
      <h2 className="sidebar__block-title">
        {sidebar.name}
      </h2>
      <ul className="sidebar__block-content">
        {
          sidebar.items.map((item) => (
            <Menu
              key={item.id}
              itemsMenu={item}
              clickHandler={changeSelect}
            />
          ))
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
