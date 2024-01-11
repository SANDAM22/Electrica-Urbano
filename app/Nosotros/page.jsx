import React from "react";
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import '../Styles/Nosotros.css'
const Nosotros = () => {
  return (

    <><Header />
    <div className="container">
    <div className="titulo">
      <h1>Acerca de nosotros</h1>
      </div>
      <p>Somos una empresa de electricidad que brinda servicios a la comunidad.</p>
      <p>Nuestro objetivo es brindar energía confiable y asequible a todos nuestros clientes.</p>

      <div className="galeria">

      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.397159643028!2d-58.59248642497135!3d-34.644671559660885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7859e34d965%3A0xf88a47834827b90c!2sAv.%20Rivadavia%2015960%2C%20B1706%20Haedo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1704930695569!5m2!1sen!2sar"
  width="400"
  height="300"
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  sandbox="allow-scripts allow-same-origin"
></iframe>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Nosotros;