import React from 'react';
import {Link} from 'react-scroll/modules';
import Links from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';


export const Navbar = () => {
  return (
    <div className={styles.gridContainerC}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                  <Links className={styles.a} href="/">
                    <Image
                      src={"/img/logocibv.png"}
                      height={200}
                      width={200}
                      alt="CIBV"
                      className={styles.logo} 
                    />
                  </Links>
                </li>

                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="cibv" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}   
                  >
                    Nosotros
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="capitales" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Indicadores 
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link 
                    className={styles.a} 
                    to="intereses" 
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Inversiones 
                  </Link>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Facebook_W.png"}
                      height={30}
                      width={30}
                      alt="facebook"
                      className={styles.logo} 
                    />
                  </Links>
                </li> 
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Twitter_W.png"}
                      height={30}
                      width={30}
                      alt="twitter"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Instagram_W.png"}
                      height={30}
                      width={30}
                      alt="instagram"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Linkedin_W.png"}
                      height={30}
                      width={30}
                      alt="linkedin"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
                <li className={styles.li}>
                  <Links className={styles.a} href="#">
                    <Image
                      src={"/img/Whatsapp_W.png"}
                      height={30}
                      width={30}
                      alt="whatsapp"
                      className={styles.logo} 
                    />
                  </Links>
                </li>
            </ul>
        </nav>
    </div>
  
  )
}
