import React from "react";
import { Link } from "gatsby";
// import { Link, animateScroll as scroll} from "react-scroll";

import "../../styles/header.scss";


export const HeaderTemplate = ({ data }) => {
  return (
    <header className="header container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-4 col-10">
        <Link to="/">
            <div className="header__logo">
            
              <span className="header__logo_archgako">ARCHGAKÒ</span>
              <span className="header__logo_sign">architecture and design company</span>
            </div>
       </Link>
          
        </div>

      <div className="col-md-8 col-2">
        <nav className="header__desktop-nav">
          {data.menuItems.length > 0 && (
            <ul>
              {data.menuItems.map(menuItem => (
                <li key={menuItem.linkURL} className="header__desktop-nav_item">
                  {/* <Link
                    // className="nav-link"
                    activeClass="active"
                    to={menuItem.linkURL}
                    // to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                      {menuItem.label}
                  </Link> */}
                  <Link to={menuItem.linkURL}>{menuItem.label}</Link>
                </li>
              ))}
          </ul>
          )}
        </nav>

        <button className="header__mobile-burger" id="burger" type="button">
            <div>
                <i></i>
                <i></i>
                <i></i>
            </div>
        </button>

        <section className="side-menu" id="side-menu">
          <h5 className="side-menu__title">Меню</h5>
          <nav className="side-menu__nav">
          {data.menuItems.length > 0 && (
            <ul>
              {data.menuItems.map(menuItem => (
                <li key={menuItem.linkURL} className="side-menu__nav_item">
                  <Link to={menuItem.linkURL}>{menuItem.label}</Link>
                </li>
              ))}
          </ul>
          )}
        </nav>
        </section>
      </div>

      <div></div>
    </div>

  </header>
  )
}



const Header = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <HeaderTemplate data={data} />;
};
  
export { Header };

