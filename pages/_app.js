import '../styles/globals.css'
import "../styles/register.css";
import Header from '../components/header';
import Footer from '../components/footer'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function MyApp({ Component, pageProps }) {
  return (<><NotificationContainer/><Header/><Component {...pageProps} /><Footer/>  </>)
}

export default MyApp
