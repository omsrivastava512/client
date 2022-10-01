import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Auth/Login'
import Feature1 from '../components/Home/Features/FirstWide'
import Header from '../components/Header'
import Pricing from '../components/Home/Pricing'
import styles from '../styles/Home.module.css'

export default function Auth() {
  return (
    <>
    <Header/>
    <Login/>
    </>
  )
}
