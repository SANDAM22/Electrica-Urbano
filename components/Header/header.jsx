import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.css"


function Header (){
return (
<header>

    <div className="Container">
        <div className="Divlogo">
            <Link href="/">
                <Image className= "logo" src="/img/LogoUrbano.jpg" height={100} width ={100}/>
                </Link>
               <Link href="/"id="electrica">ELÉCTRICA</Link> <Link href="/"id="urbano">URBANO</Link> 

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