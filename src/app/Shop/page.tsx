import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'

export default function page(){
  return (
  
    <div>
      <NavBar />
      <Header route='Shop' />
      <p>Shops</p>
    </div>
  )
}
