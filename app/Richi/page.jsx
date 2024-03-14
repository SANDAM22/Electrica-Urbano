"use client"
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
import styles from '../Styles/Richi.css'
import TablaDatos from '../../components/DataTable/dataTable.jsx'
const productos = [
    { Código: '125.287.05', Descripción: 'FICHA HEMBRA 3P S/LATERAL BLANCO' },
    { Código: '125.267.02', Descripción: 'FICHA HEMBRA R3 3P IRAM S/FRONTAL NG' },
    { Código: '125.277.05', Descripción: 'FICHA HEMBRA R3 3P S/FRONTAL BLANCO' },
    { Código: '125.277.02', Descripción: 'FICHA HEMBRA R3 3P S/FRONTAL NEGRO' },
    { Código: '103.285.05', Descripción: 'FICHA MACHO 20A BLANCO' },
    { Código: '103.283.05', Descripción: 'FICHA MACHO 3P S/LATERAL BLANCO' },
    { Código: '103.273.05', Descripción: 'FICHA MACHO R3 3P S/FRONTAL BLANCO' },
    { Código: '103.273.02', Descripción: 'FICHA MACHO R3 3P S/FRONTAL NEGRO' },
    { Código: '102.255.05', Descripción: 'FICHA VELADOR P.CHATO BLANCO' },
    { Código: '102.255.02', Descripción: 'FICHA VELADOR P.CHATO NEGRO' },
    { Código: '115.256.05', Descripción: 'PERILLA VELADOR BLANCO' },
    { Código: '115.256.02', Descripción: 'PERILLA VELADOR NEGRO' },
    { Código: '135.206.05', Descripción: 'PROLONGADOR BIP.SIMPLE 10MT BINOR.BL' },
    { Código: '135.206.02', Descripción: 'PROLONGADOR BIP.SIMPLE 10MT BINOR.NG' },
    { Código: '135.226.05', Descripción: 'PROLONGADOR BIP.SIMPLE 10MT IRAM BL' },
    { Código: '135.226.02', Descripción: 'PROLONGADOR BIP.SIMPLE 10MT IRAM NG' },
    { Código: '135.207.05', Descripción: 'PROLONGADOR BIP.SIMPLE 15MT BINOR.BL' },
    { Código: '135.207.02', Descripción: 'PROLONGADOR BIP.SIMPLE 15MT BINOR.NG' },
    { Código: '135.227.05', Descripción: 'PROLONGADOR BIP.SIMPLE 15MT IRAM BL' },
    { Código: '135.227.02', Descripción: 'PROLONGADOR BIP.SIMPLE 15MT IRAM NG' },
    { Código: '135.208.05', Descripción: 'PROLONGADOR BIP.SIMPLE 20MT BINOR.BL' },
    { Código: '135.208.02', Descripción: 'PROLONGADOR BIP.SIMPLE 20MT BINOR.NG' },
    { Código: '135.228.05', Descripción: 'PROLONGADOR BIP.SIMPLE 20MT IRAM BL' },
    { Código: '135.228.02', Descripción: 'PROLONGADOR BIP.SIMPLE 20MT IRAM NG' },
    { Código: '135.203.05', Descripción: 'PROLONGADOR BIP.SIMPLE 3MT BINOR. BL' },
    { Código: '135.203.02', Descripción: 'PROLONGADOR BIP.SIMPLE 3MT BINOR. NG' },
    { Código: '135.223.05', Descripción: 'PROLONGADOR BIP.SIMPLE 3MT IRAM BL' },
    { Código: '135.223.02', Descripción: 'PROLONGADOR BIP.SIMPLE 3MT IRAM NG' },
    { Código: '135.204.05', Descripción: 'PROLONGADOR BIP.SIMPLE 5MT BINOR.BL' },
    { Código: '135.204.02', Descripción: 'PROLONGADOR BIP.SIMPLE 5MT BINOR.NG' },
    { Código: '135.224.05', Descripción: 'PROLONGADOR BIP.SIMPLE 5MT IRAM BL' },
    { Código: '135.224.02', Descripción: 'PROLONGADOR BIP.SIMPLE 5MT IRAM NG' },
    { Código: '138.631.05', Descripción: 'ZAPATILLA 3 T+USB DOBLE X 1.5MT IRAM BL' },
    { Código: '138.631.02', Descripción: 'ZAPATILLA 3 T+USB DOBLE X 1.5MT IRAM NG' },
    { Código: '127.400.05', Descripción: 'ZAPATILLA 4T S/CABLE C/TER. IRAM BL' },
    { Código: '127.400.02', Descripción: 'ZAPATILLA 4T S/CABLE C/TER. IRAM NEGRO' },
    { Código: '127.410.05', Descripción: 'ZAPATILLA 4T S/CABLE C/TER.BINORMA BL' },
    { Código: '127.410.02', Descripción: 'ZAPATILLA 4T S/CABLE C/TER.BINORMA NG' },
    { Código: '138.561.05', Descripción: 'ZAPATILLA 4T X 1.5MT C/TER.BINORMA BL' },
    { Código: '138.561.02', Descripción: 'ZAPATILLA 4T X 1.5MT C/TER.BINORMA NG' },
    { Código: '138.541.05', Descripción: 'ZAPATILLA 4T X 1.5MT C/TER.IRAM BLANCO' },
    { Código: '138.541.02', Descripción: 'ZAPATILLA 4T X 1.5MT C/TER.IRAM NEGRO' },
    { Código: '138.562.05', Descripción: 'ZAPATILLA 4T X 2.5MT C/TER.BINORMA BL' },
    { Código: '138.562.02', Descripción: 'ZAPATILLA 4T X 2.5MT C/TER.BINORMA NG' },
    { Código: '138.542.05', Descripción: 'ZAPATILLA 4T X 2.5MT C/TER.IRAM BLANCO' },
    { Código: '138.542.02', Descripción: 'ZAPATILLA 4T X 2.5MT C/TER.IRAM NEGRO' },
    { Código: '138.564.05', Descripción: 'ZAPATILLA 4T X 5MT C/TER.BINORMA BL' },
    { Código: '138.564.02', Descripción: 'ZAPATILLA 4T X 5MT C/TER.BINORMA NG' },
    { Código: '138.544.05', Descripción: 'ZAPATILLA 4T X 5MT C/TER.IRAM BLANCO' },
    { Código: '138.544.02', Descripción: 'ZAPATILLA 4T X 5MT C/TER.IRAM NEGRO' },
    { Código: '140.432.01', Descripción: 'ZOCALO C/ROTOR P/TUBO 20W A 40W BL' },
    { Código: '140.034.01', Descripción: 'ZOCALO PARA TUBO LED BLANCO' }
];


function Richi() {
    return (
        <>
            <Header />
            <div className='Contenedor'>
                <h1>Lista Richi</h1>

                <TablaDatos data={productos} className='Tabla' />

            </div>

            <Footer />
        </>
    )

}

export default Richi