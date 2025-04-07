import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Srikanth Nelluri. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
