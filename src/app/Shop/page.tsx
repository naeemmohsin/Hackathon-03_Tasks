import React from 'react'
import Image from 'next/image'
import Header from '../components/header'
import NavBar from '../components/navbar'

export default function page(){
  return (
  
    <div className='w-[1920px] h-100vh'>
    
         <NavBar/>
         <Header route='Our Chef'/>
    
          <div className='w-[1320px] h-[1386px] ml-[300px] my-[100px] grid grid-cols-4 grid-rows-3'>
    
            <div className='w-[312px] h-[446px]' >
            <ul><li>
                 <Image src={"/Rumi.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Tahmina Rumi</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
                 
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
              <ul><li>
                 <Image src={"/Begum.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/Muhammad.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/Kathy.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                <Image src={"/Rumi-2.png"} alt="" width={312} height={379.17} /></li>
                <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                  <Image src={"/devgon.png"} alt="" width={312} height={379.17} /></li>
                  <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/Motin.png"} alt="" width={312} height={379.17} /> </li>  
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/William.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/Roy.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/Kholil.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                <Image src={"/Rahman.png"} alt="" width={312} height={379.17} /></li>
                <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
    
            <div className='w-[312px] h-[446px]'>
            <ul><li>
                 <Image src={"/Holly.png"} alt="" width={312} height={379.17} /></li>
                 <li className='font-bold text-[20px] text-center'> Jorina Begum</li>
                 <li className=' font-normal text-[18px] text-center'> Chef</li>
                 </ul>
            </div>
    
          </div>
    
          </div>
  )
}
