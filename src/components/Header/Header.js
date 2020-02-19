import React from "react";
import { Link } from "gatsby";

import "./Header.scss";
import { render } from "node-sass";


export const HeaderTemplate = ({ data }) => (
  <header className="header row justify-content-between align-items-center">
    <div className="col-3">
        <Link to="/">
          <div className="header__logo">
            <span className="desktop-header__logo_archgako">ARCHGAKÒ</span>
            <span className="desktop-header__logo_sign">architecture and design company</span>
          </div>
        </Link>
      </div>

    <div className="col-8 col-lg-7">
      <nav className="header__desktop-nav">
        {data.menuItems.length > 0 && (
          <ul className="header__desktop-nav_menu">
            {data.menuItems.map(menuItem => (
              <li key={menuItem.linkURL} className="header__desktop-nav_menu_item">
                <Link to={menuItem.linkURL}>{menuItem.label}</Link>
              </li>
            ))}
        </ul>
        )}
      </nav>
    </div>
  </header>
);

const Header = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <HeaderTemplate data={data} />;
};
  
  export { Header };

