import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const SubMenuItem = ({ url, text, iconName, badgeNum }) => (
  <li className="m-menu__item" aria-haspopup="true">
    <NavLink to={url} className="m-menu__link">
      <i className={`m-menu__link-icon ${iconName}`}></i>
      <span className="m-menu__link-text">
        {text}
      </span>
      {badgeNum &&
        <span className="m-menu__link-badge">
          <span className="m-badge m-badge--success">
            {badgeNum}
          </span>
        </span>
      }
    </NavLink>
  </li>
);

const SubMenu = ({ subMenuItems }) => (
  <div className="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
    <span className="m-menu__arrow m-menu__arrow--adjust"></span>
    <ul className="m-menu__subnav">
      {subMenuItems.map(subMenuItem =>
        <SubMenuItem
          key={subMenuItem.text}
          text={subMenuItem.text}
          iconName={subMenuItem.iconName}
          badgeNum={subMenuItem.badgeNum}
        />
      )}
    </ul>
  </div>
);

export default SubMenu;
