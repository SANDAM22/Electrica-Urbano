import React from "react";
import Link from "next/link";
import styles from "./header.css"


function Header (){
return (
<header>

    <div className="container">
        <div>

        </div>

        <nav>

            <Link href="/Nosotros">¿Quiénes somos?</Link>
            <Link href="/Productos">Productos</Link>
            <Link href="/Login">Iniciar sesión</Link>
            <Link href="/Contacto">Contacto</Link>


        </nav>

        </div>


</header>


)
}

export default Header