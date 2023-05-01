import Head from "next/head";
// import styles from '../styles/Home.module.css'
import styles from "../styles/secondPageProjet.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Carousel } from "react-responsive-carousel";

const imgg1 = new URL("../../public/assets/IMG_blog1.jpg", import.meta.url);
export default function SecondPageProjet({ data }) {
  const router = useRouter();
  const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = "http://localhost:5050";
  const [projet, setprojet] = useState([]);
  const Gallery = ({ imagePaths }) => {
    if (!Array.isArray(imagePaths)) {
      imagePaths = [imagePaths];
    }
    return (
      <div className="gallery">
        {imagePaths.map((path) => (
          <img
            key={path}
            src={`http://localhost:5050/imagesProjet/${path}`}
            alt={path}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/projet/${data.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hedhi idata", data);
        setprojet(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log("hedha projet", projet);
    console.log("hetha taille imta3 tableau images", projet?.images?.length);
  }, [projet]);
  return (
    <div>
      <Head>
        <title>Projet Referent</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
   
        <div className={styles.flex_container_page}>
          <h2 className={styles.titre}>{projet.titre}</h2>
          <div className={styles.type_adress}>
            <h4>Type : {projet.type}</h4>
            <h4>
              Production annuelle du projet : {projet.productionAnuelle} KWC
            </h4>
            <h4>Adresse : {projet.adresse}</h4>
          </div>
          <div className={styles.imgvid} >
        
          <div  style={{ maxWidth: "700px", margin: "0 auto",justifySelf:'center',alignSelf:"center" }}>
         
            <Carousel showThumbs={false}>
              {projet.images &&
                projet.images.map((image, index) => (
                  <div key={index}>
                    <Gallery imagePaths={projet.images[index]}></Gallery>
                  </div>
                ))}
            </Carousel>
           
          </div>
          <div className={styles.vid}><video src="./v.mp4" controls/></div>
          </div>
          <div className={styles.article}>{projet.description}</div>

          <div className=" d-flex justify-content-center">
            <button
              className="blog-button  "
              onClick={() => {
                router.back();
              }}>
              {" "}
              Retour
            </button>
          </div>
        </div>
        <Footer />
    
    </div>
  );
}
SecondPageProjet.getInitialProps = async ({ query }) => {
  const data = query;

  return { data };
};
/**import Head from "next/head";
import Image from 'next/image';
// import styles from '../styles/Home.module.css'
const breakPoints = [{ width: 1, itemsToShow: 1 }];

import styles from "../styles/secondPage.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Carousel } from "react-responsive-carousel";

import Partenariat from "./components/partenariat/partenariat";
import ImageArticle from "./components/imageArticle/imageArticle";
const imgg1 = new URL("../../public/assets/IMG_blog1.jpg", import.meta.url);
export default function SecondPageArticle({data}) {
    const router = useRouter();
    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = 'http://localhost:5050'
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch(`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/article/${data.id}`)
            .then(response => response.json())
            .then(data => {
                console.log('hedhi idata', data);
                setArticle(data);
            }).catch(error => console.log(error));

    }, []);
useEffect(()=>{
        console.log('hedha article', article)
        console.log('hetha taille imta3 tableau images', article?.images?.length)
    },[article]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClickPrevious = () => {
      setCurrentImageIndex((currentImageIndex - 1 + article.images.length) % images.length);
    };
  
    const handleClickNext = () => {
      setCurrentImageIndex((currentImageIndex + 1) % article.images.length);
    };
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className={styles.flex_container_page}>
                
                 <h2 className={styles.titre}>{article.titre}</h2>
        <div className={styles.article}>{article.contenu}</div>
        
        <img  className={styles.image1} src={`${PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL}/imagesArticle/${Array.isArray(article?.images)? article.images[0]:article.images}`} /> 
            
        <div className={styles.flex_container_page}>
    
    <h2 className={styles.titre}>
    {article.titre}
    </h2>

    <div className="row justify-content-center">
       
        
        <div className=" col-sm-12 col-md-6">
        <p className={styles.article}>
        {article.contenu}
          </p>      
        </div>
    </div>
                <button
                    className={styles.btnR}
                    onClick={() => {
                        router.back();
                    }}>
                    {" "}
                    Retour
                </button>
            </div>
            <Footer />
        </div>
        </div>
    );
}
SecondPageArticle.getInitialProps = async ({ query }) => {
    const data = query;

    return { data };
};



 */