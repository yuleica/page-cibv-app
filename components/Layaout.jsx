import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Otro.module.css';
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import {Header} from './Header';


export default function Layaout({children, title, description, home}) {
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <header className={styles.header}>

        </header>
        <Navbar />
        <main>{children}</main>
        {!home && (
            <div className={styles.main}>
                <Link 
                    href="/"
                    className={styles.boton}>
                    ← Inicio
                </Link>
            </div>
      )}
      <footer><Footer /></footer>
    </div>
  )
}

Layaout.defaultProps = {
    title: "Mi Sitio Web",
    description: "Descripción de mi Sitio Web"
};