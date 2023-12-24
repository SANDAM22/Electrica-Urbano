import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../components/Header/header'
import Head from 'next/head';
import styles from "./Styles/index.css"
import Footer from '../components/Footer/footer'





const RootLayout = ({ children }) => {
  return (
    
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
         
         <Header/>

         
        <div className='container'>
        <div className='position'></div>
        </div>


        <Footer/>


        
    </>
  );
};

export default RootLayout;
