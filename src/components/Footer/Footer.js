import React from "react";
import { Link } from "gatsby";

import "../../styles/footer.scss";

export const FooterTemplate = ({ data }) => {
  return (
    <footer className = "footer container-fluid">
      <div className="footer__container">
        <h3 className="footer__title">{ data.title }</h3>
        {data.contactItems.length > 0 && (
          <ul className="footer__contacts">
            {data.contactItems.map(contactItem => (
              <li className="footer__contacts_item"><Link to={contactItem.contact}>{contactItem.label}</Link></li>
          ))}
          </ul>
        )}

        {data.socialLinks.length > 0 && (
          <ul className="footer__social-links">
            {data.socialLinks.map(socialLink => (
              <li className="footer__social-links_item"><Link to={socialLink.linkURL}>{socialLink.label}</Link></li>
          ))}
          </ul>
        )}
      </div>
  </footer>
  );
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };


