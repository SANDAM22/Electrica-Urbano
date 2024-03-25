"use client"
import React, { useState } from "react";
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import '../Styles/Contacto.css';

async function handleSubmit(data) {
  try {
    const response = await fetch('/api/contact', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // Desactivar la verificación de certificados SSL
      agent: new (require('https').Agent)({ rejectUnauthorized: false }),
    });

    if (response.ok) {
      alert('Su mensaje ha sido enviado exitosamente');
    } else {
      alert('Ha ocurrido un error al enviar el mensaje.\nPor favor inténtelo de nuevo');
    }
  } catch (error) {
    console.error(error);
    alert('Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
  }
}

function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
  };

  return (
    <>
      <Header />
      <div className="formulario">
        <form onSubmit={onSubmit}>
          <h1 className="titulo">Contáctenos</h1>
          <input type="text" name="name" placeholder="Nombre y apellido" value={formData.name} onChange={handleChange} required minLength={8} />
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required /><br />
          <input type="text" name="message" placeholder="¿Cómo podemos ayudarte?" className="message" value={formData.message} onChange={handleChange} required /><br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
