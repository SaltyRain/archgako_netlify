import React from "react";
import "./Footer.scss";

// export const FooterTemplate = ({ data }) => {
//   const { socialLinks } = data;


//   return (
//     <footer className = "footer footer__container container">
//       <h3 className="footer__title">Контакты</h3>
//       <a className="footer__tel" href="tel:+79111620482">+7 (921) 636 14 51</a>
//       <a className="footer__tel" href="tel:+79111620482">+7 (911) 162 04 82</a>
//       <a className="footer__mail" href="mailto:archgako@gmail.com">@: archgako@gmail.com</a>
//       <ul className="footer__social-media">
//         <li className="footer__item_social-media_item"><a href="https://www.instagram.com/ARCHGAKO/">instagram</a></li>
//         <li className="footer__item_social-media"><a href="https://www.facebook.com/ARCHGAKO/">facebook</a></li>
//       </ul>
//     </footer>
//   )
// }

// function Footer() {
//   return (
//     <div>
//       <span>footer</span>
//     </div>
//   )
// }

// export default Footer;

export default () => (
  <footer className = "footer footer__container container">
    <h3 className="footer__title">Контакты</h3>
    <a className="footer__tel" href="tel:+79111620482">+7 (921) 636 14 51</a>
    <a className="footer__tel" href="tel:+79111620482">+7 (911) 162 04 82</a>
    <a className="footer__mail" href="mailto:archgako@gmail.com">@: archgako@gmail.com</a>
    <ul className="footer__social-media">
      <li className="footer__item_social-media_item"><a href="https://www.instagram.com/ARCHGAKO/">instagram</a></li>
      <li className="footer__item_social-media"><a href="https://www.facebook.com/ARCHGAKO/">facebook</a></li>
    </ul>
  </footer>
)

