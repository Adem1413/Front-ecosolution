import Footer from "./components/Footer";
import GoogleMaps from "./components/googleMaps/googleMaps";
import Navbar from "./components/Navbar/Navbar";
import styles from "../styles/contact.module.scss";
import {FaFacebook, FaInstagram , FaLinkedin} from 'react-icons/fa';
import Titres from "./components/titres/titres";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className={styles.contact_title}>
      <Titres text="Contactez nous"/>
    
      </div>
      <div className={styles.containerMap}>
        <div className={styles.blockone}>
            <p>EcoSolutions Tunisie est une entreprise agréée par la STEG et l'ANME, spécialiste dans
l'étude, la conception et l'installation de systèmes photovoltaïque pour les agriculteurs, les
particuliers et les professionnels.</p>
       <div className={styles.email}>
                        <div className={styles.single_cta}>
                            <i class="far fa-envelope-open"></i>
                            <div className={styles.cta_text} >
                                <h4>E-mail</h4>
                                <span>contact@ecosolution.com</span>
                            </div>
                            </div>
                        </div>
                        <div className={styles.numerotel}>
                        <div className={styles.single_cta}>
                            <i class="fas fa-phone"></i>
                            <div className={styles.cta_text}>
                                <h4>Numéro de téléphone</h4>
                                <span>58176730</span>
                            </div>
                        </div>
                        </div>
        
        
        </div>
        <div className={styles.blocktwo}>
             <div className={styles.single_cta}>
                            <i class="fas fa-map-marker-alt"></i>
                            <div className={styles.cta_text}>
                                <h4>Localisation</h4>
                            </div>
                        </div>
                        <div className={styles.googleMaps}>
          <GoogleMaps />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
