import React from 'react';

import { Navbar } from '../components/Navbar';
import {CIBV} from '../components/CIBV';
import {Capitales} from '../components/Capitales';
import { Footer } from '../components/Footer';
import { Intereses } from '../components/Intereses';


export default function Home() {
  return (
    <div>
        <Navbar />
        <CIBV />
        <Capitales />
        <Intereses />
        <Footer />
    </div>
  )
}
