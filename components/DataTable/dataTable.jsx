"use client"
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import styles from '../../app/Styles/Catalogo.css';



function TablaDatos({ data }) {
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(data); // Inicializa con 'data'
    const [searchResults, setSearchResults] = useState([]); // Variable para almacenar los resultados del filtrado

    const columnas = [
        {
            name: 'Código',
            selector: row => row.Código,
            sortable: true,
        },
        {
            name: 'Descripción',
            selector: row => row.Descripción,
            sortable: true
        }
    ];

    useEffect(() => {
        console.log('Data actualizada:', data);
        if (data && data.length > 0) {
            setLoading(false);
            setFilteredProducts(data);
        }
    }, [data]);

    useEffect(() => {
        console.log('filteredProducts actualizada:', filteredProducts);
        if (filteredProducts && filteredProducts.length > 0) {
            const inputValue = searchValue.toLowerCase();
            const filtered = filteredProducts.filter(product => {
                return product?.Código?.toLowerCase().includes(inputValue) || product?.Descripción?.toLowerCase().includes(inputValue);
            });
            setSearchResults(filtered); // Actualiza los resultados del filtrado
        }
    }, [searchValue, filteredProducts]); // Ejecutar el efecto cuando cambie searchValue o filteredProducts

    const handleChange = (e) => {
        setSearchValue(e.target.value); // Actualiza el valor de búsqueda
    };

    console.log('Renderizando componente:', { loading, searchResults });

    return (
        <div className='component'>
            <input
                type="text"
                value={searchValue}
                onChange={handleChange}
                placeholder="Buscar por código o descripción"
            />
            {loading ? (
                <p>Cargando...</p>
            ) : searchResults.length === 0 ? (
                <p>Lo sentimos, no hay resultados para su búsqueda.</p>
            ) : (
                <DataTable
                    columns={columnas}
                    data={searchResults}
                    fixedHeader
                />
            )}
        </div>
    );
}

export default TablaDatos;

