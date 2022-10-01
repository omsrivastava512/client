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

export default function Home() {
  return (
    <>

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
