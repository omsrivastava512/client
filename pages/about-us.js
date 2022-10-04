import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NextHeadSeo from 'next-head-seo';

function About() {
    return (<>
    
    <NextHeadSeo
      title="About us"
      description="The company he built — Stackflare — pioneered cloud computing ..."
      og={{
        title: "Stackflare - Elastic & Scalable Bare metal",
        image: "/og_hero.png",
      }}
    />
    <Header/>
    <AboutUs/>
    <Footer/>

    </>);
}

export default About;