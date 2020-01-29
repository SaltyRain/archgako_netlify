import React from "react";
import { Link } from "gatsby";

import "./Footer.scss";

export const FooterTemplate = ({ data }) => {
  title
  return (
    <footer className = "footer">
      <h3 className="footer__title">{ title }</h3>
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


// export default () => (
//   <footer className = "footer footer__container container">
//     <h3 className="footer__title">Контакты</h3>
//     <a className="footer__tel" href="tel:+79111620482">+7 (921) 636 14 51</a>
//     <a className="footer__tel" href="tel:+79111620482">+7 (911) 162 04 82</a>
//     <a className="footer__mail" href="mailto:archgako@gmail.com">@: archgako@gmail.com</a>
//     <ul className="footer__social-media">
//       <li className="footer__item_social-media_item"><a href="https://www.instagram.com/ARCHGAKO/">instagram</a></li>
//       <li className="footer__item_social-media"><a href="https://www.facebook.com/ARCHGAKO/">facebook</a></li>
//     </ul>
//   </footer>
// )

