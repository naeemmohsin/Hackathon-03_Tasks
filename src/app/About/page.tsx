import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'

export default function page() {
  return (
    <div>
      <NavBar />
      <Header route="SignUP"/>
     <p>About Page</p>
    </div>
  )
}
