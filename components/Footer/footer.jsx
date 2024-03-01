import styles from './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
        <div className='contenedor'>
          <div className='Elemento'>
            <div className='Location'>
            <FontAwesomeIcon className='Location' icon={faLocationDot} />
            </div>
            <p>Congreso 1538, Haedo </p>
             </div>
             <div className="Elemento">
              <div className='Whatsapp'>
             <FontAwesomeIcon className='Whatsapp' icon={faWhatsapp} />
             </div>
             <p>Lorem ipsum dolor, sit amet consectetur</p>
              </div>
              <div className="Elemento">
                <div className='Email'>
             <FontAwesomeIcon className='Email' icon={faEnvelope} />
             </div>
             <p>Lorem ipsum dolor, sit amet consectetur</p>
              </div>
              </div>


    </footer>
  )
}

export default Footer