import React from 'react'
import { Nav } from '../../components/frame/Nav'
import { Header } from '../../components/frame/Header'
import { Footer } from '../../components/frame/Footer'
import { LogIn } from '../../components/forms/LogIn'

export const Home = () => {
  return (
    <>
    <Nav />
    <Header />
    <LogIn />
    <Footer/>
    </>
  )
}
