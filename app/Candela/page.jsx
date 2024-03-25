"use client"
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/footer.jsx';
import TablaDatos from '../../components/DataTable/dataTable.jsx';
import styles from '../Styles/Catalogo.css'

function ExcelReader() {
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    const loadExcelData = async () => {
      try {
        const response = await fetch('/data/Candela.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        const formattedData = jsonData.map(row => ({
          Código: row.Código,
          Descripción: row.Descripción
        }));

        setExcelData(formattedData);
      } catch (error) {
        console.error('Error al cargar el archivo Excel:', error);
      }
    };

    loadExcelData();
  }, []);

  return (
    <><Header /><div className='Contenedor'>


      <h1>Productos Candela</h1>
      <TablaDatos data={excelData} />

    </div> <Footer /></>
  );
}

export default ExcelReader;
