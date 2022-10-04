import Head from 'next/head'
import Image from 'next/image'
import Feature1 from '../components/Home/Features/FirstWide'
import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Pricing from '../components/Home/Pricing'
import styles from '../styles/Home.module.css'
import SecondWide from '../components/Home/Features/SecondWide'
import Footer from '../components/Footer'
import FAQ from '../components/Home/FAQ'
import NextHeadSeo from 'next-head-seo';

export default function Home() {
  return (
    <>

    <NextHeadSeo
      title="Stackflare - Elastic & Scalable Bare metal"
      description="With Stackflare Bare Metal, you have direct access to all server resources without any virtualization layer. Perfect for resource-intensive applications or workloads that require single tenant or non-virtualized environments!"
      og={{
        title: "Stackflare - Elastic & Scalable Bare metal",
        image: "/og_hero.png",
      }}
    />

    <Header/>
    <Header/>
    <Hero/>
    <Pricing/>
    <Feature1/>
    <SecondWide/>
    <FAQ/>
    <Footer/>
    </>
  )
}
