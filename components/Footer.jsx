import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.col}>
        <p className={styles.p}>
          <Link 
            href="#"
            target="_blank" 
            rel="noreferrer"
            className={styles.a} 
          >POLITICA DE PRIVACIDAD</Link>
        </p>
        <p className={styles.p}>
          <Link
            href="#"
            target="_blank" 
            rel="noreferrer"
            className={styles.a} 
          >DECLARACIÓN DE ACCESIBILIDAD</Link>
        </p>
        <p className={styles.p}>
          <Link
            href="#"
            target="_blank" 
            rel="noreferrer"
            className={styles.a} 
          >TÉRMINOS LEGALES</Link>
        </p>
      </div>
      
      <div className={styles.col}>
        <p className={styles.p}>AWMA ALIMENTOS INTELIGENTES Y SALUDABLES</p>
        <p className={styles.p}>Las Palmas 385, Locales 3 y 4</p>
        <p className={styles.p}>Peñalolén, Santiago de Chile.</p> 
          <Link className={styles.plogo} href="#">
            <Image
              src={"/img/facebook.png"}
              height={20}
              width={20}
              alt="facebook"
              className={styles.plogo} 
            />
          </Link>
          <Link className={styles.plogo} href="#">
            <Image
              src={"/img/gorjeo.png"}
              height={20}
              width={20}
              alt="twitter"
              className={styles.plogo} 
            />
          </Link>
          <Link className={styles.plogo} href="#">
            <Image
              src={"/img/instagram.png"}
              height={20}
              width={20}
              alt="instagram"
              className={styles.plogo} 
            />
          </Link>
          <Link className={styles.plogo} href="#">
            <Image
              src={"/img/linkedin.png"}
              height={20}
              width={20}
              alt="linkedin"
              className={styles.plogo} 
            />
          </Link>
          <Link className={styles.plogo} href="#">
            <Image
              src={"/img/whatsapp.png"}
              height={20}
              width={20}
              alt="whatsapp"
              className={styles.plogo} 
            />
          </Link>
      </div>
    </div>
  )
}
