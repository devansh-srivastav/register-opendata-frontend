import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function Home() {

  const apiUrl = "https://register-opendata-backend-7i7aqmgwqq-ey.a.run.app/api/";
     let router = useRouter();
    //const apiUrl = "https://registerbackend.opendatabayern.de/api/";
    //const apiUrl = "http://localhost:3100/api/";
    const ckanUrl = " http://opendatabayern.de/api/3/action/";

  const apikey="e6cf1719-b1e4-47ec-aa33-a797bdd43858";
   const header = {
        'Authorization': apikey,
        'Content-Type': 'application/json',
    };
    const [query, setQuery] = useState({
        comment: "",
        email: "",
        name:"",
        surname:"",
        phone:"",
        org:"",
        desc:"",
        position: "",
        website:"",
        org_title:""

    }); 
    const [loading, setLoad] = useState(false);
    const [orgss,setOrg]=useState([]);
  const orgs=[]
  

    useEffect(()=>{
     
      if(window) {
          if(!sessionStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn')=='no')
           { router.push('/');}
           else
           setQuery(JSON.parse(localStorage.getItem('data')));
      }
  
        let res = axios.get(ckanUrl + "organization_list?all_fields=True").then((res) => {
          for(let i=0;i<res.data.result.length;i++)
          {
           orgs.push(res.data.result[i].title);

          }
          setOrg([orgs]);
          
        }).catch((err) => {
         
        })
    
      
    },[]);

    
    useEffect(()=>{
     
      if( query.date!="" && query.email!="" && query.name!="" && query.surname!="" && query.phone!="" && query.org_title!="" && query.position!="" && query.website!="" )
         setValid(true)
      else
         setValid(false)
    
      
    },[query]);
 
    let b = '<div><p dir="ltr" style="line-height:2.465;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Sehr geehrte(r) ' + query.surname + ' ' + query.name + '</span><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#3c4043;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">,</span></p><p dir="ltr" style="line-height:2.465;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap">wir haben Ihre Registrierungsanfrage erhalten und freuen uns, dass Sie Ihre Daten auf der Open Data Bayern Plattform bereitstellen wollen.</span></p><p dir="ltr" style="line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ihre Registrierung befindet sich derzeit in Bearbeitung und kann bis zu drei Werktage in Anspruch nehmen. Falls erforderlich, wird sich unser Team mit Ihnen in Verbindung setzen.</span></p><p dir="ltr" style="line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">_______________________________________________</span></p><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Erste Informationen zu unserer Plattform:</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"></span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ziel von Open Data Bayern</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Das Hauptziel von Open Data in Bayern ist es, zur Entwicklung der Gesellschaft und der Demokratie im Land beizutragen, durch die Bereitstellung aktueller statistischer Informationen, aus denen die Nutzer neues Wissen generieren, Gesch&auml;ftsentscheidungen treffen und den Alltag erleichtern k&ouml;nnen.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"></span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Daten, die auf dem Portal ver&ouml;ffentlicht werden k&ouml;nnen</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Offene Daten sind Verwaltungsdaten (z.B. Wetterdaten,</span><a href="https://www.govdata.de/web/guest/daten/-/details/hochwasser1954gebiete" style="text-decoration:none;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Hochwasser</span></a><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, usw), die nicht gegen gesetzliche Bestimmungen versto&szlig;en, wie z. B. die Datenschutzrichtlinien einer Organisation, die unter </span><a href="https://opendatacommons.org/licenses/" style="text-decoration:none;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> einer offenen Lizenz stehen </span></a><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> und frei ver&ouml;ffentlicht werden k&ouml;nnen.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"></span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wer kann Daten auf dem Portal ver&ouml;ffentlichen</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Jeder Mitarbeiter einer administrativen Organisation kann Daten auf dem Portal ver&ouml;ffentlichen. Zu diesem Zweck wird f&uuml;r jeden Mitarbeiter bei der Registrierung ein individueller Zugang mit einer Verkn&uuml;pfung zur Organisation angelegt. Derzeit kann ein Mitarbeiter Daten f&uuml;r eine Organisation ver&ouml;ffentlichen.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"></span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Daten und Datenformat f&uuml;r die Ver&ouml;ffentlichung</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Um Daten in das Portal hochzuladen, erstellen Sie einen Datensatz und f&uuml;gen die f&uuml;r das Thema relevanten Dateien oder Links hinzu. F&uuml;r die Ver&ouml;ffentlichung der Daten werden alle offenen Formate akzeptiert, z.B. csv, html, pdf, wms, gml, text/csv, GeoJSON, TIFF, GeoTIFF, KML, SHP, usw.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Datenaustausch mit GOVDATA</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Die Open Data Bayern Plattform tauscht Daten mit GOVDATA aus. Das bedeutet, dass die Daten, die Sie auf Open Data Bayern hochladen, auch auf GOVDATA &uuml;bertragen werden und der Endnutzer sie sowohl auf Open Data Bayern als auch auf GOVDATA nutzen kann.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Automatische Datenerfassung</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Wenn Sie als Datenanbieter Daten auf Ihrer eigenen Plattform ver&ouml;ffentlichen und diese noch nicht an GOVDATA &uuml;bermitteln, k&ouml;nnen wir eine automatische Daten&uuml;bertragung von Ihrer Plattform &uuml;ber die Open Data Bayern Plattform veranlassen. Kontaktieren Sie uns dazu unter </span><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">opendatabayern@stmd.bayern.de.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Erleichterung des Datenabrufs f&uuml;r den Endnutzer</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Um den Nutzern den Zugang zu Ihren Daten zu erleichtern, bitten wir Sie, klare, leicht lesbare, kurze (3-4 S&auml;tze) Beschreibungen Ihrer Daten zu erstellen und die entsprechenden Tags anzugeben.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">________________________________________________</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">F&uuml;r Fragen stehen wir gerne unter </span><a href="mailto:opendatabayern@stmd.bayern.de" style="text-decoration:none;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">opendatabayern@stmd.bayern.de</span></a><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#0000ff;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> </span><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">zur Verf&uuml;gung.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" ></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Beachten Sie, dass dies eine automatisch erzeugte E-Mail ist. Bitte antworten Sie nicht auf diese E-Mail.</span></p ><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"></span></p ><p dir="ltr" style="line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Viele Gr&uuml;&szlig;e</span></p><p dir = "ltr" style = "line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;" > <span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ihr Open Data Bayern Team</span></p><p dir="ltr" style="line-height:2.055;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:9pt 0pt 0pt 0pt;"><span style="font-size:10.5pt;font-family:Roboto,sans-serif;color:#172b4d;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span style="border:none;display:inline-block;overflow:hidden;width:187px;height:72px;"><img src="https://lh5.googleusercontent.com/amvlLoYcHC1pOFFfrrtyJTp1ELMiDoo-Per1KDc7kxu_UwXhSWi7uOjqHaGBNj-DgMTPFVQYeBJCHGR5ieI2Nr1XaOKOI8i5xsizOYeuy-LksrbODYS5tYDiedpNg6cdhz_xd7Gq" width="187" height="72" /></span></span></p></div>'

    const [change, setChange] = useState(false);
    const [valid, setValid] = useState(false);
    const handleChange = () => (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
          ...prevState,
          [name]: value
      }));
      if(name=='org_title')
      {
          let new_value = value;
          new_value = new_value.replaceAll(" - ", "-")
          new_value = new_value.replaceAll(" ", "-")
          new_value = new_value.replaceAll(" (", "-")
          new_value = new_value.replaceAll(")", "")
          new_value = new_value.replaceAll("--", "-")
          new_value = new_value.replaceAll("---", "-")
        new_value=new_value.toLowerCase();
        setQuery((prevState) => ({
        ...prevState,
        'org': new_value
    }));
  }

      setChange(true);
      
    };


    const submit = async () => {
       setLoad(true)
            const configs = { headers: { 'Content-Type': 'application/json' } };
            
            let res = axios.post(apiUrl + "register",query,configs).
                then(async (res) => {
                  if(res.status==200)
                    {
                      let ans = await send(b);
                      NotificationManager.success('Request sent!!', 'Success');
                    }
                    else if(res.status==202)
                    {
                      NotificationManager.info('Your request is pending, we will get back to you soon!', 'Info');
                    }
                    else if(res.status==201)
                    {
                      NotificationManager.info('Your request is accepted, Please check you mail to proceed!', 'Info');
                    }
                    setLoad(false)
                    router.push("/success")
                   
                }).catch((err) => {
                  setLoad(false)
                   NotificationManager.error('Please try again', 'Error');
                   router.push("/")
                })
        return true;
    }

    const send = async (body) => {
        await axios.post(apiUrl+'email', {
            body: body, subject: "👋 Registrierungsbestätigung Open Data Bayern",to:query.email })
            .then(
                (res) => {

                }

            ).catch(
                (e) => console.log(e)
            )

    }



  return (
    <>
      <div className={styles.container}>
      <Head>
        <title>Registration</title>
        <link href='https://fonts.googleapis.com/css?family=Manrope' rel='stylesheet'></link>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className="container">
        <div className="login-loader" style={loading ? { opacity: 1 } : { opacity: 0 }}> <Image src="/loader.gif" width="35" height="35" alt="" /></div>

          <div className="register-form-container">
            <div className="reg-details">
             <h2>Registrieren und Datenbereitsteller:in werden</h2>
          
            <h4>
Um ein Datenbereitsteller-Konto zu erstellen benötigen wir einige Angaben über Sie und Ihre Organisation. Nach einer Überprüfung (1 bis 3 Werktage) durch unser Team erhalten Sie eine Freischaltung per E-Mail.            </h4>

            <h3>Datenbereitsteller:in</h3>

            <h4>
             Als Datenbereitsteller sind Sie die Person, die die Daten in das Portal hochlädt und  Fragen zu den bereitgestellten Daten beantwortet oder diese zur zuständigen Person weiterleitet. Ihre persönlichen Daten werden zu keinem Zeitpunkt öffentlich sichtbar sein. 
            </h4>
            </div>
            <form method="post" className="dataset-form login-form">
              <div className="form-group control-medium">
                <label className="control-label" htmlFor="field-login">
                Name
                </label>
                <div className="controls ">
                  <input
                    id="field-login"
                    type="text"
                    name="name"
                    value={query.name}
                    placeholder="z.B. Mustermann"
                    className="form-control"
                    onChange={handleChange()} 
                  />
                 
                </div>
              </div>
              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Vorname
                </label>
                <div className="controls ">
                  <input
                    id="field-login"
                    type="text"
                    name="surname"
                    placeholder="z.B. Maria"
                    value={query.surname}
                    className="form-control"
                    onChange={handleChange()} 
                  />
                </div>
              </div>
              <ReactTooltip id="t1" place="right" effect="solid">Idealerweise verwenden Sie hier Ihre Arbeitsmail anstatt eines Funktionspostfachs.</ReactTooltip>
              <ReactTooltip id="t2" place="right" effect="solid">Ihre Telefonnummer dient dazu Sie bei Rückfragen erreichen zu können.</ReactTooltip>
              <ReactTooltip id="t3" place="right" effect="solid">Die von Ihnen bereitgestellten Daten werden unter dem Namen Ihrer Organisation veröffentlicht.</ReactTooltip>
              <ReactTooltip id="t4" place="right" effect="solid">Empfohlene Struktur:
              <ul>
                <li>Das Mission Statement der Organisation</li>
                <li>Angebotene Dienstleistungen</li>
                <li>Art von Daten die Ihre Organisation bereitstellen wird</li>
                <li>Potenzielle Nutzer Ihrer Daten</li>
              </ul>
              </ReactTooltip>

              <div className="form-group control-medium">
                  <label className="control-label " htmlFor="field-login">
                Arbeitsmail
                </label>
                <div className="controls df">
                  <input
                    id="field-login"
                    type="text"
                    name="email"
                    value={query.email}
                    placeholder="z.B. maria.mustermann@opendatabayern.de"
                    className="form-control"
                    onChange={handleChange()} 
                  />
                  <svg data-tip data-for="t1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 1.66797C5.39616 1.66797 1.66699 5.39714 1.66699 10.0013C1.66699 14.6055 5.39616 18.3346 10.0003 18.3346C14.6045 18.3346 18.3337 14.6055 18.3337 10.0013C18.3337 5.39714 14.6045 1.66797 10.0003 1.66797ZM10.8337 15.8346H9.16699V14.168H10.8337V15.8346ZM12.5545 9.38047L11.8087 10.1471C11.2087 10.7471 10.8337 11.2513 10.8337 12.5013H9.16699V12.0846C9.16699 11.1638 9.54199 10.3305 10.142 9.7263L11.1795 8.6763C11.4795 8.3763 11.667 7.95964 11.667 7.5013C11.667 6.58047 10.9212 5.83464 10.0003 5.83464C9.07949 5.83464 8.33366 6.58047 8.33366 7.5013H6.66699C6.66699 5.65964 8.15866 4.16797 10.0003 4.16797C11.842 4.16797 13.3337 5.65964 13.3337 7.5013C13.3337 8.23464 13.0378 8.89714 12.5545 9.38047Z" fill="#131313"/>

</svg>
                </div>
              </div>
              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Telefon
                </label>
                <div className="controls df">
                  <input
                    id="field-login"
                    type="text"
                    name="phone"
                    value={query.phone}
                    placeholder="z.B. 0111 3330-0"
                    className="form-control"
                    onChange={handleChange()} 
                  />
                   <svg  data-tip data-for="t2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 1.66797C5.39616 1.66797 1.66699 5.39714 1.66699 10.0013C1.66699 14.6055 5.39616 18.3346 10.0003 18.3346C14.6045 18.3346 18.3337 14.6055 18.3337 10.0013C18.3337 5.39714 14.6045 1.66797 10.0003 1.66797ZM10.8337 15.8346H9.16699V14.168H10.8337V15.8346ZM12.5545 9.38047L11.8087 10.1471C11.2087 10.7471 10.8337 11.2513 10.8337 12.5013H9.16699V12.0846C9.16699 11.1638 9.54199 10.3305 10.142 9.7263L11.1795 8.6763C11.4795 8.3763 11.667 7.95964 11.667 7.5013C11.667 6.58047 10.9212 5.83464 10.0003 5.83464C9.07949 5.83464 8.33366 6.58047 8.33366 7.5013H6.66699C6.66699 5.65964 8.15866 4.16797 10.0003 4.16797C11.842 4.16797 13.3337 5.65964 13.3337 7.5013C13.3337 8.23464 13.0378 8.89714 12.5545 9.38047Z" fill="#131313"/>
</svg>
                </div>
              </div>
              <br/>
              <h3>
Über Ihre Organisation</h3>
              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Organisation
                </label>
                <div className="controls df">
                <input
                    id="field-login"
                    type="text"
                    name="org_title"
                    value={query.org_title}
                    placeholder="z.B. Open Data Bayern oder Stadt München"
                    className="form-control"
                    onChange={handleChange()} 
                    list="orgs"
                  />
<datalist id="orgs">
 
{orgss.length>0 && orgss[0].map((data,index)=>{
   return(
     <option key={data.id} id={data} value={data}/>
  )
 } )}
  
</datalist>
               
 
                 
                   <svg  data-tip data-for="t3"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 1.66797C5.39616 1.66797 1.66699 5.39714 1.66699 10.0013C1.66699 14.6055 5.39616 18.3346 10.0003 18.3346C14.6045 18.3346 18.3337 14.6055 18.3337 10.0013C18.3337 5.39714 14.6045 1.66797 10.0003 1.66797ZM10.8337 15.8346H9.16699V14.168H10.8337V15.8346ZM12.5545 9.38047L11.8087 10.1471C11.2087 10.7471 10.8337 11.2513 10.8337 12.5013H9.16699V12.0846C9.16699 11.1638 9.54199 10.3305 10.142 9.7263L11.1795 8.6763C11.4795 8.3763 11.667 7.95964 11.667 7.5013C11.667 6.58047 10.9212 5.83464 10.0003 5.83464C9.07949 5.83464 8.33366 6.58047 8.33366 7.5013H6.66699C6.66699 5.65964 8.15866 4.16797 10.0003 4.16797C11.842 4.16797 13.3337 5.65964 13.3337 7.5013C13.3337 8.23464 13.0378 8.89714 12.5545 9.38047Z" fill="#131313"/>
</svg>
                </div>
              </div>
              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Webseite
                </label>
                <div className="controls
                ">
                  <input
                    id="field-login"
                    type="text"
                    name="website"
                    value={query.website}
                    placeholder="z.B. https://www.opendatabayern.de"
                    className="form-control"
                    onChange={handleChange()} 
                  />
                </div>
              </div>

              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Beschreibung
                </label>
                <div className="controls  df">
                    <textarea rows="5" type="text" name="desc" placeholder="Bitte stellen Sie Ihre Organisation in maximal 150 Wörten vor."
                    className="form-control" 
                    onChange={handleChange()}
                    value={query.desc}
                    id="field-login"/>
                    <svg  data-tip data-for="t4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 1.66797C5.39616 1.66797 1.66699 5.39714 1.66699 10.0013C1.66699 14.6055 5.39616 18.3346 10.0003 18.3346C14.6045 18.3346 18.3337 14.6055 18.3337 10.0013C18.3337 5.39714 14.6045 1.66797 10.0003 1.66797ZM10.8337 15.8346H9.16699V14.168H10.8337V15.8346ZM12.5545 9.38047L11.8087 10.1471C11.2087 10.7471 10.8337 11.2513 10.8337 12.5013H9.16699V12.0846C9.16699 11.1638 9.54199 10.3305 10.142 9.7263L11.1795 8.6763C11.4795 8.3763 11.667 7.95964 11.667 7.5013C11.667 6.58047 10.9212 5.83464 10.0003 5.83464C9.07949 5.83464 8.33366 6.58047 8.33366 7.5013H6.66699C6.66699 5.65964 8.15866 4.16797 10.0003 4.16797C11.842 4.16797 13.3337 5.65964 13.3337 7.5013C13.3337 8.23464 13.0378 8.89714 12.5545 9.38047Z" fill="#131313"/>
</svg>      
                </div>
              </div>
              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Ihre Position
                </label>
                <div className="controls ">
                  <input
                    id="field-login"
                    type="text"
                    name="position"
                    value={query.position}
                    placeholder="z.B. Smart City Managerin"
                    className="form-control"
                    onChange={handleChange()} 
                  />
                </div>
              </div>
              <br/>
              <br/>
              <div className="form-group control-medium">
                  <label className="control-label" htmlFor="field-login">
                Hinterlassen Sie uns Eine Nachricht
                </label>
                <div className="controls ">
                  
                  <textarea rows="5" type="text" value={query.comment} name="comment" placeholder="Ihre Nachricht (optional)" 
                    className="form-control" 
                    onChange={handleChange()} 
                    id="field-login"/>     
                </div>
                              </div>
                              <div className="login-loader" style={loading ? { opacity: 1 } : { opacity: 0 }}> <Image src="/loader.gif" width="35" height="35" alt="" /></div>

                          <button type="button" className={!valid ? "blue-btn inactive-btn" : "blue-btn active-btn"} disabled={valid ? false : true} onClick={() => submit()}>Registrieren</button>
            </form>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
