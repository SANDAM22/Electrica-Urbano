import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../components/Header/header'
import Head from 'next/head';
import Image from "next/image";
import Styles from "./index.css"


const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Electrica Urbano|Inicio</title>
      </Head>

      
        
          
           
          
         <Image className='fondo'src='/img/Fondo.jpeg' layout='fill'></Image>
         <Header />
         
          

          

        
          
        
      
    </>
  );
};

export default RootLayout;
