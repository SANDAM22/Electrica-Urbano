import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

function TablaDatos({ data }) {
    const [loading, setLoading] = useState(true);
    const columnas = [
        {
            name: 'Código',
            selector: row => row.Código,
            sortable: true
        },
        {
            name: 'Descripción',
            selector: row => row.Descripción,
            sortable: true
        }
    ];

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <DataTable
                    columns={columnas}
                    data={data}
                    pagination
                    paginationPerPage={5}
                    fixedHeader
                />
            )}
        </div>
    );
}

export default TablaDatos;