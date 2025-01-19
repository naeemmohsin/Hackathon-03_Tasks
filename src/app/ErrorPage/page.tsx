import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

export default function page() {
  return (
  <div className='w-[1920px] h-[1766px] '>
      <NavBar/>
      <Header route='ErrorPage'/>
   <div className='w-[630px] h-[342px] mb-32'>
   <div className='w-[161px] h-[104px]'>
      <h1 className='w-[161px] h-[104] mt-[130px] ml-[880px] font-bold text-[96px] text-[#FF9F0D]'>404</h1>
      <p className='w-[630px] h-[40px] font-bold text-[32px] mt-[80px] ml-[645px] text-center'>Oops! Look likes something going wrong
      </p>
      <p className='w-[490px] h-[52px] font-normal text-[18px] mt-[50px] ml-[715px] text-center'>Page Cannot be found! we’ll have it figured out in no time.
                   Menwhile, cheek out these fresh ideas:
      </p>
      <button className='w-[197px] h-[58px] mt-[80px] ml-[880px] rounded-[6px] font-bold text-[18px] pr-12 pl-12 gap-[10px] text-white bg-[#FF9F0D]'> Go to home</button>
    </div>
    </div>
    <br />
    <br />
  
  <Footer/>
  </div>
  )
}
