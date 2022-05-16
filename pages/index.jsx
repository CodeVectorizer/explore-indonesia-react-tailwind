import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/explore-indonesia-logo-w.png'
import menu from '../public/menu.svg'
import search from '../public/search.svg'
import Link from 'next/link'
import HeroCardItem from './components/HeroCardItem'
import HeroVideoCard from './components/HeroVideoCard'

export default function Home() {
  return (
    <div className='px-[30px] py-12 after:content-[""] after:absolute after:inset-0 relative block bg-[url("/bg-hero.png")] after:bg-gradient-to-t after:from-black after:to-gray-900 after:opacity-30 z-10 after:-z-20 bg-cover bg-center'>
        {/* Mobile Nav */}
      <div className='flex items-center mx-auto my-4 max-w-7xl sm:max-w-full'>
        <span className="mr-auto sm:mr-0"><Image src="/explore-indonesia-logo-w.png" alt="me" width="150" height="60" /></span>
        <div className="sm:flex hidden items-center mr-auto">
          <a href="#" className="text-lg mx-16 uppercase font-bold text-white">Destination</a>
          <a href="#" className="text-lg mx-16 uppercase font-bold text-white">Experience</a>
          <a href="#" className="text-lg mx-16 uppercase font-bold text-white">About</a>
          <a href="#" className="text-lg mx-16 uppercase font-bold text-white">Gallery</a>
        </div>
        <span className="mr-7"><Image  src="/search.svg" alt="me" width="24" height="24" /></span>
        <span><Image src="/menu.svg" alt="me" width="24" height="24" /></span>
      </div>

      {/* Hero Section */}
      <div className="relative z-0 grid grid-cols-1  justify-items-center sm:justify-items-start sm:mt-48 sm:ml-[206px]">
        <h1 className="mx-auto sm:mx-0 my-4 text-[58px] sm:text-9xl  uppercase font-black text-white leading-[63px]">Explore <br/> Indonesia</h1>
        <button className='w-full sm:w-[270px] sm:h-[82px] text-lg font-bold text-white bg-[#DD2242] rounded-full h-[60px]'>Start Travelling</button>

        <div className="flex flex-col sm:flex-row items-start justify-start  mt-[54px]  before:bg-black before:content-[''] before:absolute before:inset-0 before:opacity-60 before:-z-10 w-full relative">
          <HeroCardItem number="01" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum."/>                    
          <HeroCardItem number="02" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum."/>                    
          <HeroCardItem number="03" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum."/>                    
                    
          <div className="flex flex-col items-center justify-center w-full relative mt-5 sm:mt-0 sm:left-[30px] ">
          <HeroVideoCard/>
          </div>                      
          </div>                
      </div>
    </div>    
  )
}


