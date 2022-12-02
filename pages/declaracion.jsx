import React from 'react';

import Layaout from '../components/Layaout';
import styles from '../styles/Otro.module.css';

export default function declaracion(){
  return (
    <Layaout
      title="Declaración"
      description="declaracion"
    >
      <div className={styles.container}>
        <h2 className={styles.descriptionItem}>Declaración de Accesibilidad</h2>
        <div className={styles.descriptionSeccion}>
          <div>
                <p>COOPERATIVA DE SERVICIOS CIBV LTDA. trabajamos por mantener el presente sitio web con las mejores prácticas de accesibilidad 
                  para nuestros visitantes, en particular para organizaciones del territorio de Chile.</p>
                <p>Buscamos implementar los estándares y recomendaciones de W3C Web Accessibility Initiative (WAI). Agradeceremos 
                  a todos nuestros visitantes contactarnos para sugerirnos sus mejoras y observaciones.</p> 
                
          </div>
        </div>
      </div>
    </Layaout>
  )
}

