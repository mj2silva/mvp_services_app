import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LinkSidebar from './LinkSidebar';
import { ItemSidebar } from './Sidebar';

type Props = {
  clickHandler:Function,
  itemsMenu: ItemSidebar
}

const Menu:FC<Props> = ({ itemsMenu, clickHandler }:Props) => (
  <li className="sidebar__block-item-container">
    <div role="button" tabIndex={itemsMenu.id} className={`sidebar__block-item sidebar__block-item-${itemsMenu.status}`} onKeyUp={() => clickHandler(itemsMenu.id)} onClick={() => clickHandler(itemsMenu.id)}>
      <div className="sidebar__block-item-ico-container">
        <FontAwesomeIcon icon={itemsMenu.icon} className="sidebar__block-item-ico" />
      </div>
      <div className="sidebar__block-item-ico-container-alt">
        <FontAwesomeIcon icon={itemsMenu.iconHover} className="sidebar__block-item-ico" />
      </div>
      <span className="sidebar__block-item-label">{itemsMenu.title}</span>
    </div>
    <ul className="sidebar__block-item-subitems-container">
      {
      itemsMenu.subitems.map((subitem) => (
        <LinkSidebar key={subitem.label} to={`./${subitem.path}`}>{subitem.label}</LinkSidebar>
      ))
    }
    </ul>
  </li>
);

export default Menu;
