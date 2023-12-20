import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.css"


function Header (){
return (
<header>

    <div className="container">
        <div>
            <Link href="/">
                <Image src="/img/Logo Urbano.jpg" height={100} width ={100}/>
                </Link>

        </div>

        <nav>

            <Link className="navbutton" href="/Nosotros">¿Quiénes somos?</Link>
            <Link className="navbutton" href="/Productos">Productos</Link>
            <Link className="navbutton" href="/Login">Iniciar sesión</Link>
            <Link className="navbutton" href="/Contacto">Contacto</Link>


        </nav>

        </div>


</header>


)
}

export default Header