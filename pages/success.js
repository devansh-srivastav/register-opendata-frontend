import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Question from '../public/que.svg';
import ReactTooltip from 'react-tooltip';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main >
          <div className="center-container">
             <h2>Vielen Dank für Ihre Registrierung!</h2>
                <br/>
                <br/>
                <h4>
                      Sie werden eine Bestätigung per E-Mail erhalten.
                      Ihre Registrierung befindet sich derzeit in Bearbeitung. Wir werden uns in 1 - 3 Werktagen bei Ihnen melden.
                </h4>
                <br/>
                <br/>
                <h4>
                      Haben Sie keine E-Mail erhalten? <a href="mailto:opendatabayern@stmd.byern.de">Kontaktieren Sie uns.</a>
                </h4>
          </div>
      </main>
    </div>
  );
}
