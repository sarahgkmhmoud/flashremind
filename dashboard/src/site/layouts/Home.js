import React from 'react'
import { Nav } from '../../components/frame/Nav'
import { Header } from '../../components/frame/Header'
import { Footer } from '../../components/frame/Footer'
import { SignUpLogIn } from '../../components/forms/SignUpLogIn'

export const Home = () => {
  return (
    <>
    <Nav />
    <Header />
    <SignUpLogIn />
    <Footer/>
    </>
  )
}
