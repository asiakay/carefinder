import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        CareFinder ©2023 All rights reserved. <a href="#">Privacy Policy</a> |{" "}
        <a href="#">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
