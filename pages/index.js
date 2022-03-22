import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
/*import Footer from '../components/footer'*/


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
              <div className="container">
                  <div className="full-w" >
                      <h2>Registrieren und
                      Datenbereitsteller:in werden
                          </h2>

                      <br />
                      <h4>Um ein Datenbereitsteller-Konto zu erstellen benötigen wir ein paar Angaben über Sie und Ihre Organisation. Nach einer Überprüfung (1 bis 3 Werktagen) durch unsere Kolleg:innen erhalten Sie eine Freischaltung per E-Mail.</h4>
                      <h3>
                          Datenbereitsteller:in
                    </h3>

                      <h4>
                      Als Datenbereitsteller sind Sie die Person, die die Daten in das Portal hochlädt und  Fragen zu den bereitgestellten Daten beantwortet oder diese zur zuständigen Person weiterleitet. Ihre persönlichen Daten werden zu keinem Zeitpunkt öffentlich sichtbar sein. 
                      </h4>


                  </div>
              </div>
      </main>

    {/*  <Footer/>*/}
    </div>
  )
}
