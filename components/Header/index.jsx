import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>CareFinder</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
