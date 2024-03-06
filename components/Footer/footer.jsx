import styles from './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons';


function Footer() {
  return (
    <footer>
        <div className='contenedor'>
          <div className='Elemento'>
            <div className='Location'>
            <FontAwesomeIcon className='Location' icon={faLocationDot} />
            </div>
            <p>Rivadavia 15872, Haedo </p>
             </div>
             <div className="Elemento">
              <div className='Whatsapp'>
             <FontAwesomeIcon className='Whatsapp' icon={faWhatsapp} />
             </div>
             <p>+54 9 11 2550-6050</p>
              </div>
              <div className="Elemento">
                <div className='clock'>
             <FontAwesomeIcon className='clock' icon={faClock} />
             </div>
             <p>Horario de atención: 8:00-17:00hs</p>
              </div>
              </div>


    </footer>
  )
}

export default Footer