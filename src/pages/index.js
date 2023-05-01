import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";
import Progress from "./components/progress/Progress";
import BootstrapCarousel from "./components/carousel/Bootstrap";
import ServicesMain from "./components/serviceMain/ServicesMain";
import Footer from "./components/Footer";
import Projets from "./components/proj-main/Projets";
import Blogs from "./components/Articles/Blogs";
import Titres from "./components/titres/titres";
import Partenariat from "./components/partenariat/partenariat";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ecosolution</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper2">
          <Navbar />
          
          <BootstrapCarousel />

          <Progress/>
          <h2>
          <Titres text="Découvrir nos services"/>
          </h2>
         
          <ServicesMain />
          
          <h2>  <Titres text="Nos projets réferents"/></h2>
          <Projets />
         
          <h2> <Titres text="Pour savoir plus sur l'energie solaire vous pouvez lire ces articles"/></h2>
          <Blogs/>
          
          <h2><Titres text="NOS PARTENAIRES"/></h2>

          <Partenariat/>
         
          <Footer />
         
        </div>
      </main>
    </>
  );
}
