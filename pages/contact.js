import Head from 'next/head'
import Image from 'next/image'
import ContactUs from '../components/Home/ContactUs'
import Header from '../components/Header'
import NextHeadSeo from 'next-head-seo';

export default function contact() {
  return (
    <>
    <NextHeadSeo
      title="Contact Us"
      description="Customer support available 24/7 via phone, email, chat, and tickets."
      og={{
        title: "Stackflare - Elastic & Scalable Bare metal",
        image: "/og_hero.png",
      }}
    />

    <Header/>
    <ContactUs/>
    </>
  )
}
