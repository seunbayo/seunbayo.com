import React from "react";
import styles from "./Footer.module.css";

const footerYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; Seunbayo | {footerYear} 0 by bolaji.
    </footer>
  );
};

export default Footer;
