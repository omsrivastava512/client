import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Auth/Login'
import Feature1 from '../components/Home/Features/FirstWide'
import Header from '../components/Header'
import Pricing from '../components/Home/Pricing'
import styles from '../styles/Home.module.css'
import NextHeadSeo from 'next-head-seo';

export default function Auth() {
  return (
    <>
    <NextHeadSeo
      title="Log In"
      description="Login to your Linode account."
      og={{
        title: "Stackflare - Elastic & Scalable Bare metal",
        image: "/og_hero.png",
      }}
    />
    <Header/>
    <Login/>
    </>
  )
}
