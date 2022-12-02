import React from 'react';
import Image from 'next/image';

import styles from '../styles/Otro.module.css';

export const Intereses = () => {
  return (
    <div className={styles.container} id="intereses">
      <div className={styles.encabezado}>
        <h2>Tipos de Inversión de Interés para Cooperativa CIBV</h2>
      </div>
      <div className={styles.containerSeccion} >
        <p className={styles.descriptionSeccion}>Desarrollo Inmobiliario Agroecológico ● Cohousing ● Gestión Inmobiliaria Técnica para proyectos Telcom y ERNC ● Ecoaldeas ● Administración y Gestión de Activos Inmuebles.</p>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.item1}>
          <Image
            priority
            src={"/img/casas.png"}
            height={400}
            width={700}
            alt="casas"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/mapa.png"}
            height={400}
            width={400}
            alt="mapa"
            className={styles.logoItem} 
          />
        </div>
      </div>
      <div className={styles.containerSeccion}>
        <p className={styles.descriptionSeccion}>Biocomercio, Importaciones, Exportaciones y Desarrollo de Mercados Locales ● Innovación en Alimentos Saludables, Cosmética Natural, y Alimentos Funcionales.</p>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.item1}>
          <Image
            src={"/img/campo.png"}
            height={200}
            width={300}
            alt="sello"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/Cruelty-Free-logo-1024x512.jpg"}
            height={200}
            width={300}
            alt="cruelty-free"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/smart.png"}
            height={200}
            width={300}
            alt="campo"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/curcuma.png"}
            height={200}
            width={300}
            alt="curcuma"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/crema.png"}
            height={200}
            width={300}
            alt="crema"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/biocomercio.png"}
            height={200}
            width={300}
            alt="biocomercio"
            className={styles.logoItem} 
          />
        </div>
      </div>
      <div className={styles.containerSeccion}>
        <p className={styles.descriptionSeccion}>Tecnologías Limpias ● Energías Renovables No Convencionales ● Sistemas de Automatización y Control ● Activos Energéticos ● Ropa Inteligente y Smart Technology ● Domótica ● Bioconstrucción ● Servicios de Ingeniería Aplicados a la Sostenibilidad</p>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.item1}>
          <Image
            src={"/img/molinoAgua.png"}
            height={300}
            width={400}
            alt="molino_agua"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/robot.png"}
            height={300}
            width={300}
            alt="robot"
            className={styles.logoItem} 
          />
        </div>
        <div className={styles.item1}>
          <Image
            src={"/img/molinoAire.png"}
            height={300}
            width={500}
            alt="molino aire"
            className={styles.logoItem} 
          />
        </div>
      </div>

      <div className={styles.encabezado}>  
        <h2>Las cooperativas contamos con una red de cooperación internacional de una trayectoria de ya casi 200 años. Entre todas las cooperativas del mundo, se produce más de 10% de PIB Mundial y se emplea a más del 10% de la población del planeta.</h2>
      </div>     
    </div>   
  )
}
