import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Footer = () => {
  return (
    <div className={styles.gridContainerF}> 
      <div className={styles.itemF}>
        <Image
          src={"/img/coop.png"}
          height={100}
          width={200}
          alt="logo coop"
          className={styles.logo} 
        />
      </div>    
      <div className={styles.itemF}>
        <div>
          <Link 
            href="/politicas"
            target="_blank" 
            rel="noreferrer"
            className={styles.a} 
          >POLITICA DE PRIVACIDAD</Link>
        </div>
        <div>
          <Link
            href="/declaracion"
            target="_blank" 
            rel="noreferrer"
            className={styles.a} 
          >DECLARACIÓN DE ACCESIBILIDAD</Link>
        </div>
        <div>
          <Link
            href="#"
            target="_blank" 
            rel="noreferrer"
            className={styles.a} 
          >TÉRMINOS LEGALES</Link>
        </div>  
      </div>
      <div className={styles.itemF}>
        <p >COOPERATIVA DE SERVICIOS CIBV LTDA.</p>
        <p >(En proceso de Constitución)</p>
        <p >Las Palmas 385, Locales 3 y 4</p>
        <p >Peñalolén, Santiago de Chile.</p> 
      </div>
      <div className={styles.itemF}>
          <Link href="#">
            <Image
              src={"/img/Facebook_W.png"}
              height={30}
              width={30}
              alt="facebook"
              className={styles.logo} 
            />
          </Link>
          <Link href="#">
            <Image
              src={"/img/Twitter_W.png"}
              height={30}
              width={30}
              alt="twitter"
              className={styles.logo} 
            />
          </Link>
          <Link href="#">
            <Image
              src={"/img/Instagram_W.png"}
              height={30}
              width={30}
              alt="instagram"
              className={styles.logo} 
            />
          </Link>
          <Link href="#">
            <Image
              src={"/img/Linkedin_W.png"}
              height={30}
              width={30}
              alt="linkedin"
              className={styles.logo} 
            />
          </Link>
          <Link href="#">
            <Image
              src={"/img/Whatsapp_W.png"}
              height={30}
              width={30}
              alt="whatsapp"
              className={styles.logo} 
            />
          </Link>
          <p>@ 2022 Todos los derechos reservados Cooperativa de Servicios CIBV Ltda.</p>
        </div>
      
    </div>
  )
}
