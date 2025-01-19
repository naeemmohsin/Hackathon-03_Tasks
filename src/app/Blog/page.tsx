import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'

export default function blogPage() {
  return (
    <div>
      <NavBar />
              <Header route="Blog"/>
    <p>Blog Page</p> 
    </div>
  )
}
