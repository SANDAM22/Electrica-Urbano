/*import React, { useState, useEffect } from 'react';

const DelayedLoading = ({ children, delay = 2000 }) => {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setMostrarContenido(true), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return mostrarContenido ? children : <Loading />;
};*/