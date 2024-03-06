import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../components/Header/header'
import Head from 'next/head';
import styles from "./Styles/index.css"
import Footer from '../components/Footer/footer'
import Loading from './Loading'
import Slider from '../components/Slider/Slider'
import Image from 'next/image';








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
        <h1>Productos seleccionados</h1>
        <div className='Selección'>
          <div className='Seleccionado'>
          <Image className='imagen' src='/img/reflector30wfrio.png' height={110} width={120}></Image>
          <p className='precio'>$4943</p>
          <p>Reflector candela 30W</p></div>
          <div className='Seleccionado'>
          <Image className='imagen' src='/img/Tacsa.jpg' height={110} width={120}></Image>
          <p className='precio'>$1267</p>
          <p>Cinta Tacsa 20M</p>
          </div>
          <div className='Seleccionado'>
          <Image className='imagen' src='/img/Guirnalda.jpg' height={130} width={150}></Image>
          <p className='precio'>$18725</p>
          <p>Guirnalda luces led</p>
          </div>
          <div className='Seleccionado'>
          <Image className='imagen' src='/img/Sunshine.jpg' height={110} width={130}></Image>
          <p className='precio'>$5831</p>
          <p>Fotocontrol Sica Sunshine</p></div>
        </div>
      </div>


      <Footer />





    </>
  );
};

export default RootLayout;
