import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../components/Header/header'
import Head from 'next/head';
import styles from "./Styles/index.css"
import Footer from '../components/Footer/footer'
import Loading from './Loading'
import Slider from '../components/Slider/Slider'
import Image from 'next/image';
import Link from 'next/link';








const RootLayout = ({ children }) => {
  return (

    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>



      <Header />

      <Slider />


      <div className='container'>
        <h1>Algunas Marcas con las que Trabajamos</h1>
        <div className='Selección'>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Candela.jpg' height={110} width={120}></Image>
          </Link>  
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Sica.jpg' height={110} width={120}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Tacsa logo.jpg' height={130} width={150}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/trefi.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Kalop.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/logo-faroluz.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/ferrolux.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Taad-logo-60.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Richi.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Productos'>
          <Image className='imagen' src='/img/Jeluz.jpg' height={110} width={130}></Image>
          </Link>
          
        </div>
      </div>


      <Footer />





    </>
  );
};

export default RootLayout;
