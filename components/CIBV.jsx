import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const CIBV = () => {

  return (
    <div className={styles.container} id="cibv">

        <section>
          <div className={styles.gridContainer}>
            <div className={styles.item1}>
              <p className={styles.descriptionItem}><b>Gestionamos Proyectos y Capitales de Riesgo con foco en proyectos bajo 
              estándar ESG.</b></p>
              <p className={styles.descriptionItem}>
              Nuestros proyectos provienen de una agrupación de organismos de Ingeniería
              en ERNC, Biocomercio, Producción de Cosmética y Alimentos Saludables, Desarrollo 
              Inmobiliario Agroecológico y Capitales de Riesgo. Esta agrupación se denomina 
              Polo Empresarial ODS Cero. Sus principales organismos son cooperativas.</p>
              <Image
                src={"/img/informacion.png"}
                height={100}
                width={100}
                alt="información"
                className={styles.logoItem} 
              />
            </div>
            <div className={styles.item1}>
              <Image
                src={"/img/via.png"}
                height={350}
                width={350}
                alt="ruta o camino"
              />
            </div>
          </div>
          <div className={styles.containerSeccion}>
            <p className={styles.descriptionSeccion}>
                <b>El capital privado y la ESG: del cumplimiento a la creación de valor
              Informe Global Private Equity Responsible Survey 2021</b>
              <p className={styles.descriptionSeccion}>https://www.pwc.es/es/publicaciones/deals/capital-riesgo-esg-cumplimiento-creacion-valor.html</p>
            </p> 
            <p className={styles.descriptionSeccion}><b>El Enfoque de Inversión en los ODS</b>
              <p className={styles.descriptionSeccion}>https://www.unpri.org/download?ac=6243</p>
            </p>
            <p className={styles.descriptionSeccion}>
              <b>Creando un mercado financiero sostenible en Chile</b>
              <p className={styles.descriptionSeccion}> https://www.unepfi.org/wordpress/wp-content/uploads/2021/03/Luis-Maldonado-Creando-un-mercado-financiero-sostenible-en-Chile-.pdf</p>
            </p>
          </div>
          <div className={styles.containerSeccion2}>
              <Image
                    priority
                    src={"/img/agua.png"}
                    height={300}
                    width={1300}
                    alt="agua con burbujas"
                    className={styles.imagenAgua}
              />
          </div>
        </section>

    </div>
  )
}
