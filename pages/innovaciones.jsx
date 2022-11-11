import React from 'react';
import Image from 'next/image';

import Layaout from '../components/Layaout';
import styles from '../styles/Otro.module.css';

export default function innovaciones() {
  return (
    <div className={styles.container}>
      <Layaout
        title="Innovación"
        description="Innovación"
      >
        <div className={styles.divinterno}>
          <div className={styles.card}>
            <h2>Pastas Untables</h2>
          </div>
          <div className={styles.card}>
            <h2>Snacks</h2>
          </div>
          <div className={styles.card}>
            <h2>Hamburguesas Veganas</h2>
          </div>
        </div>
        <div className={styles.divinterno}>
            <div className={styles.card}>
              <Image
                src={"/img/sugarfreemarron.jpg"}
                height={250}
                width={250}
                alt="sin azúcar"
                className={styles.logo} 
              />

            </div>
            <div className={styles.card}>
              <Image
                src={"/img/selloorganico.jpg"}
                height={250}
                width={250}
                alt="orgánico"
                className={styles.logo} 
              />
            </div>
            <div className={styles.card}>
              <Image
                src={"/img/selloambiente.jpg"}
                height={250}
                width={250}
                alt="orgánico"
                className={styles.logo} 
              />
            </div>
          </div>
        </Layaout>
      </div>
  )
}
