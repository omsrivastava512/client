import Head from 'next/head'
import Image from 'next/image'
import ContactUs from '../components/ContactUs'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function contact() {
  return (
    <>
    <Header/>
    <ContactUs/>
    </>
  )
}
