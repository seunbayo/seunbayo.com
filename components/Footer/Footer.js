import React from "react";
import styles from "./Footer.module.css";

const footerYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; Seunbayo | {footerYear}.
    </footer>
  );
};

export default Footer;
