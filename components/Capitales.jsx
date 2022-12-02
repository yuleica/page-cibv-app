import React from 'react';

import styles from '../styles/Otro.module.css';

export const Capitales = () => {
  return (
    <div className={styles.gridContainerC} id="capitales">
          <div className={styles.itemC}>
            <p className={styles.descriptionItemC}><b>Capitales Ejecutados</b></p>
            <p className={styles.descriptionItemC}><b>M$ 20.000</b> </p>
          </div>
          <div className={styles.itemC}>
            <p className={styles.descriptionItemC}><b>Capitales en Gestión</b></p>
            <p className={styles.descriptionItemC}><b>USD 11.000.000</b></p>
          </div>
          <div className={styles.itemC}>
            <p className={styles.descriptionItemC}><b>Socios Cooperados</b></p>
            <p className={styles.descriptionItemC}><b>11</b></p>
          </div>
          <div className={styles.itemC}>
            <p className={styles.descriptionItemC}><b>Proyectos Apoyados</b></p>
            <p className={styles.descriptionItemC}><b>4</b></p>
          </div>
      </div>
  )
}
