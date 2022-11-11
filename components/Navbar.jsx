import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Navbar = () => {
  return (
    <div className={styles.grid}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.a} href="/">
                        AWMA 
                    </Link>
                </li>
                <li className={styles.li}>
                  <Link className={styles.a} href="/innovaciones">
                    Nuestras Innovaciones 
                  </Link>
                </li>

                <li className={styles.li}>
                  <Link className={styles.a} href="#">
                    <Image
                      src={"/img/facebook.png"}
                      height={50}
                      width={50}
                      alt="facebook"
                      className={styles.logo} 
                    />
                  </Link>
                </li> 
                <li className={styles.li}>
                  <Link className={styles.a} href="#">
                    <Image
                      src={"/img/gorjeo.png"}
                      height={50}
                      width={50}
                      alt="twitter"
                      className={styles.logo} 
                    />
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link className={styles.a} href="#">
                    <Image
                      src={"/img/instagram.png"}
                      height={50}
                      width={50}
                      alt="instagram"
                      className={styles.logo} 
                    />
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link className={styles.a} href="#">
                    <Image
                      src={"/img/linkedin.png"}
                      height={50}
                      width={50}
                      alt="linkedin"
                      className={styles.logo} 
                    />
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link className={styles.a} href="#">
                    <Image
                      src={"/img/whatsapp.png"}
                      height={50}
                      width={50}
                      alt="whatsapp"
                      className={styles.logo} 
                    />
                  </Link>
                </li>
            </ul>
        </nav>
    </div>
  
  )
}
