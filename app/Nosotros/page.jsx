import React from "react";
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import '../Styles/Nosotros.css'
import Image from "next/image";
const Nosotros = () => {
  return (

    <><Header />
    <div className="container">
    <div className="titulo">
      <h1>Acerca de nosotros</h1>
      </div>
      <p className="texto">Somos una empresa joven dedicada a la provisión y distribución de materiales eléctricos y artefactos de iluminación para el hogar, el comercio y la industria, con la misión y el compromiso de acompañar a nuestros clientes, priorizando la atención para satisfacer en forma rápida y eficiente cualquier necesidad.</p>
      

      <div className="galeria">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.404435669695!2d-58.59152002497135!3d-34.644487759651184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7857f42e85d%3A0xc1506dd4dc44aeb5!2sAv.%20Rivadavia%2015872%2C%20Haedo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1705459159593!5m2!1sen!2sar" 
      width="400" 
      height="300" 
      allowFullScreen=""
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"
       sandbox="allow-scripts allow-same-origin">
        
       </iframe>


<Image src="/img/Fondo.jpg" loading="lazy" height={300} width={400}></Image>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Nosotros;