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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/img/LogoUrbano.jpg" />

      </Head>



      <Header />

      <Slider />


      <div className='container'>
        <h1>Principales Marcas con las que Trabajamos</h1>
        <div className='Selección'>
          <Link href='/Candela'>
            <Image className='imagen' src='/img/Candela.jpg' height={110} width={120}></Image>
          </Link>
          <Link href='/Sica'>
            <Image className='imagen' src='/img/Sica.jpg' height={110} width={120}></Image>
          </Link>
          <Link href='/Tacsa'>
            <Image className='imagen' src='/img/Tacsa logo.jpg' height={130} width={150}></Image>
          </Link>
          <Link href='/Trefilcon'>
            <Image className='imagen' src='/img/trefi.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Kalop'>
            <Image className='imagen' src='/img/Kalop.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Faroluz'>
            <Image className='imagen' src='/img/logo-faroluz.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Ferrolux'>
            <Image className='imagen' src='/img/logo_ferrolux.png' height={110} width={130}></Image>
          </Link>
          <Link href='/Baw'>
            <Image className='imagen' src='/img/Baw.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Richi'>
            <Image className='imagen' src='/img/Richi.jpg' height={110} width={130}></Image>
          </Link>
          <Link href='/Jeluz'>
            <Image className='imagen' src='/img/Jeluz.jpg' height={110} width={130}></Image>
          </Link>

        </div>
      </div>


      <Footer />





    </>
  );
};

export default RootLayout;
