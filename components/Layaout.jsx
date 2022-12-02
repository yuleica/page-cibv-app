import React from 'react';
import Head from 'next/head';

import styles from '../styles/Otro.module.css';
import {Navbar} from './Navbar';
import {Footer} from './Footer';

export default function Layaout({children, title, description}) {
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <Navbar />
        <main>{children}</main>
        <footer><Footer /></footer>
    </div>
  )
}

Layaout.defaultProps = {
    title: "Mi Sitio Web",
    description: "Descripción de mi Sitio Web"
};