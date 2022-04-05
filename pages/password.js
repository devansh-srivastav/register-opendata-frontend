import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React, { useState, useEffect } from 'react'
import { useRouter,pathname} from 'next/router';
import Question from '../public/que.svg';
import ReactTooltip from 'react-tooltip';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Home() {
let router=useRouter()

  const apiUrl = "https://register-opendata-backend-7i7aqmgwqq-ey.a.run.app/api/";
//const apiUrl = "http://localhost:3100/api/";
const ckanUrl = " http://opendatabayern.de/api/3/action/";
const apikey = "e6cf1719-b1e4-47ec-aa33-a797bdd43858";
    
const header = {
  'Authorization': apikey,
  'Content-Type': 'application/json',
};
const [loading, setLoad] = useState(false);

let categories=['andere',
                'bevolkerung-und-gesellschaft',
                'bildung-kultur-und-sport',
                'energie',
                'internationale-themen',
                'justiz-rechtssystem-und-offentliche-sicherheit',
                'landwirtschaft-fischerei-forstwirtschaft-und-nahrungsmittel',
                'gesundheit',
                'regionen-und-stadte',
                'umwelt',
                'verkehr',
                'regierung-und-offentlicher-sektor',
                'wissenschaft-und-technologie',
                'wirtschaft-und-finanzen'

              ]

    const [query, setQuery] = useState({
        email:"",
        username:"",
        password:"",
        confirmPass:""
    }); 
    useEffect(()=>{
      setQuery((prevState) => ({
        ...prevState,
        'username': router.query.username
    }));
        if(query.username=="")NotificationManager.info('Password should be atleast 8 character long!', 'info');
    },[router.query]);

    useEffect(()=>{
     
        if(query.password!="" && query.password==query.confirmPass && query.password.length>=8)
        setValid(true)
     else if(query.password!="" && query.confirmPass!="" &&( query.password!=query.confirmPass ))
      {
          setValid(false)
      }  
      else if(query.password!="" && query.confirmPass!="" && query.password==query.confirmPass && query.password.length<8)
        {
          setValid(false);
           NotificationManager.info('Password should be atleast 8 character long!', 'info');
        }
   
    },[query]);
    
    const [change, setChange] = useState(false);
    const [valid, setValid] = useState(false);
    const handleChange = () => (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
          ...prevState,
          [name]: value
      }));
      setChange(true);
     
  };

  const submit = async () => {
       
    const configs = { headers: { 'Content-Type': 'application/json' } };
    
    let res = axios.post(apiUrl + "createUser",query,configs).
        then(async (res) => {
         
         setLoad(true)
         await RegistrationOnPlatform(query,res.data.result).then(async (result)=>{
          await addToOrg(query,res.data.result).then(async (result)=>{   
           await addToCate(query,res.data.result,0).then(async (result)=>{
               setLoad(false)
                NotificationManager.success('You can now login', 'Success');
                router.push('http://opendatabayern.de/user/login');
            }).catch(err=>{
              setLoad(false)
              NotificationManager.error('Something went wrong! Please try again!', 'Error');
            })
           
          }).catch(err=>{
            setLoad(false)
            NotificationManager.error('Something went wrong! Please try again!', 'Error');
          })
        }).catch(err=>{
          setLoad(false)
          NotificationManager.error('Something went wrong! Please try again!', 'Error');
       })
        }).catch(err=>{
          setLoad(false)
          NotificationManager.error('Something went wrong! Please try again!', 'Error');
        })

  }


const RegistrationOnPlatform=async (body,result)=>
{
  let fullname=result.name+" "+result.surname;
    let data={
        "name":body.username,
        "email":result.email,
        "password":body.password,
        "fullname":fullname,
        "about":result.desc
    }
   await axios.post( ckanUrl+"user_create",data,{headers:header}).then(res=>{
        return res;
    }).catch(err=>{
        return err
    })
     
}


const addToOrg=async (body,result)=>
{
  let fullname=result.name+" "+result.surname;
    let data={
        "username":body.username,
        "id":result.org,
        "role":"editor"
    }
   await axios.post( ckanUrl+"organization_member_create",data,{headers:header}).then(res=>{
        return res;
    }).catch(err=>{
        return err
    })
     
}

const addToCate=async(body,result,id)=>{

  for(let i=0;i<14;i++)
  {
    let data={
    'id':categories[i],
    'object':body.username,
    'object_type':'user',
    'capacity':'editor'
    }
   
   await axios.post(ckanUrl+"member_create",data,{headers:header}).then(res=>{
      return res;
     }).catch(err=>{
      return err
  })
    id++;
  }
  return true; 
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Manrope' rel='stylesheet'></link>

      </Head>

      <main >
       
        <div className="container center-container">
        <div className="login-loader" style={loading ? { opacity: 1 } : { opacity: 0 }}> <Image src="/loader.gif" width="35" height="35" alt="" /></div>

          <div className="register-form-container">
            <div className="reg-details">
            <h2>Registrierung abschließen</h2>
            <br/>
            <h4>
            Ihr Username lautet {query.username}
            </h4>
            <br/>
           <h4>
               Bitte setzen sie ein neues Passwort fest
           </h4>
            </div>
            <form method="post" className="dataset-form login-form">
              <div className="form-group control-medium">
                <label className="control-label" htmlFor="field-login">
                Password
                </label>
                <div className="controls ">
                  <input
                    id="field-login"
                    type="password"
                    name="password"
                    value={query.password}
                    placeholder="************"
                    className="form-control"
                    onChange={handleChange()} 
                  />
                 
                </div>
              </div>

              <div className="form-group control-medium">
                <label className="control-label" htmlFor="field-login">
                Confirm Password
                </label>
                <div className="controls ">
                  <input
                    id="field-login"
                    type="password"
                    name="confirmPass"
                    placeholder="************"
                    value={query.confirmPass}
                    className="form-control"
                    onChange={handleChange()} 
                  />
                </div>
              </div>
              
              <button className={!valid?"blue-btn inactive-btn":"blue-btn active-btn"} type="button" onClick={()=>submit()} disabled={valid?false:true}>Passwort erstellen</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
