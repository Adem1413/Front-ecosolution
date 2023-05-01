import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
const logg = new URL("./Navbar/logo.png", import.meta.url);
export default function Footer() {
  return (
    //         <footer className="footer">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="footer-col">

    //                     <ul>
    //                         <li><img className='img-footer ' src={logg} width="200"></img></li>
    //                         <li><a href="#">about us</a></li>
    //                         <li><a href="#">our services</a></li>
    //                         <li><a href="#">privacy policy</a></li>
    //                     </ul>
    //                 </div>
    //                 <div className="footer-col ">
    //                     <h4>Contactez-nous</h4>
    //                     <ul>
    //                         <li><a href="#">Siège social GAFSA : Avenue El Hakim Gafsa -Z1 -2100</a></li>
    //                         <li><a href="#">Numéro de téléphone : 58176730</a></li>
    //                         <li><a href="#">E-mail : contact@ecosolution.com</a></li>

    //                     </ul>
    //                 </div>
    //                 <div className="footer-col">
    //                     <h4>get help</h4>
    //                     <ul>
    //                         <li><a href="https://www.google.tn/maps/place/Eco-solutions+Tunisie/@34.4194778,8.7919754,20.24z/data=!4m19!1m13!4m12!1m4!2m2!1d10.2039484!2d36.8684776!4e1!1m6!1m2!1s0x12f897ae381063a5:0xc39ffecc72c2b584!2sEco-solutions+Tunisie,+Gafsa!2m2!1d8.7920781!2d34.4195375!3m4!1s0x12f897ae381063a5:0xc39ffecc72c2b584!8m2!3d34.4195375!4d8.7920781?hl=fr">Localisation de la société</a></li>
    //                         {/* <li><a href="#">??</a></li>
    //                         <li><a href="#">??</a></li>
    //                         <li><a href="#">??</a></li> */}
    //                     </ul>
    //                 </div>

    //                 <div className="footer-col m-20 ">
    //                     <h4>follow us</h4>
    //                     <div className="social-links">
    //                         <a href=''><FaFacebook/></a>
    //                         <a href="#"><FaInstagram/></a>
    //                         <a href="#"><FaLinkedin/></a>

    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //    </footer>

    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Localisation</h4>
                  <span>
                    Siège social GAFSA : Avenue El Hakim Gafsa -Z1 -2100
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Numéro de téléphone</h4>
                  <span>58176730</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>E-mail</h4>
                  <span>contact@ecosolution.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/">
                    <img className="img-fluid " src={logg} width="200"></img>
                  </a>
                </div>
                <div class="footer-text"></div>
                <div class="footer-social-icon">
                  <span>Abonnez nous</span>
                  <a href="https://www.facebook.com/ecosoltunisie">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Ecosolutions</h3>
                </div>
                <ul>
                  <li>
                    <a href="/Articles">Articles</a>
                  </li>
                  <li>
                    <a href="/ServicePage">services</a>
                  </li>
                  <li>
                    <a href="/ProjetRefPage">Projets Referents</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Evaluez votre devis</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    vous pouvez évaluer votre devis en cliquant sur ce bouton
                  </p>
                </div>
                <Link href="/devis/Cordonnees">
                  <button className={styles.navbarButton}>
                    Formulaire de devis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
