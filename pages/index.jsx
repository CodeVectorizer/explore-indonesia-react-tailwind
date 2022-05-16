import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/explore-indonesia-logo-w.png'
import menu from '../public/menu.svg'
import search from '../public/search.svg'
import Link from 'next/link'
import HeroCardItem from './components/HeroCardItem'
import HeroVideoCard from './components/HeroVideoCard'
import ButtonPrimary from './components/ButtonPrimary'
import CardImage from './components/CardImage'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <div className='scroll-smooth hover:scroll-auto'>
      <div className='px-[30px] py-12 after:content-[""] after:absolute after:inset-0 relative block bg-[url("/bg-hero.png")] after:bg-gradient-to-t after:from-black after:to-gray-900 after:opacity-30 z-10 after:-z-20 bg-cover bg-center'>
        {/* Mobile Nav */}
        <div className='flex items-center mx-auto my-4 max-w-7xl sm:max-w-full'>
          <span className="mr-auto sm:mr-0"><Image src="/explore-indonesia-logo-w.png" alt="me" width="150" height="60" /></span>
          <div className="sm:flex hidden items-center mr-auto">

            <Link href="#destination">
              <a href="#" className="text-lg mx-16 uppercase font-bold text-white">Destination</a>
            </Link>
            <Link href="#experience">
              <a href="#" className="text-lg mx-16 uppercase font-bold text-white">Experience</a>
            </Link>
            <a href="#" className="text-lg mx-16 uppercase font-bold text-white">About</a>
            <a href="#" className="text-lg mx-16 uppercase font-bold text-white">Gallery</a>
          </div>
          <span className="mr-7 cursor-pointer"><Image src="/search.svg" alt="me" width="24" height="24" /></span>
          <span className='cursor-pointer'><Image src="/menu.svg" alt="me" width="24" height="24" /></span>
        </div>

        {/* Hero Section */}
        <div className="relative z-0 grid grid-cols-1 justify-items-start sm:mt-48 sm:ml-[206px]">
          <h1 className="mr-auto my-4 text-[58px] sm:text-[120px]  uppercase font-black text-white leading-[63px] sm:leading-[130px]">Explore <br /> Indonesia</h1>
          <ButtonPrimary text="Start Traveling" />

          <div className="flex flex-col sm:w-full sm:flex-row items-start justify-start  mt-[54px]  before:bg-black before:content-[''] before:absolute before:inset-0 before:opacity-60 before:-z-10 w-full relative">
            <HeroCardItem number="01" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum." />
            <HeroCardItem number="02" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum." />
            <HeroCardItem number="03" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum." />

            <div className="relative h-full w-full">
              <img className="sm:absolute bottom-0 w-full top-0 right-0 left-0 h-full object-cover " src="/hero-video-image.png" alt="me" />
              <span className="absolute inset-0  top-1/2  right-1/2 translate-x-1/2 -translate-y-1/2 cursor-pointer flex justify-center sm:items-center items-center">
                <img src="/icon-play-w.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <div className="bg bg-[#010A20]" id='destination'>
        <CardImage isReverse={false} src="/video-image-1.png" />
        <CardImage src="/video-image-2.png" />
      </div>

      {/* Section 2 */}
      <div className="bg-[url('/bg-section-3.png')] sm:bg-cover sm:bg-top bg-top " id='experience'>
        <div className="sm:px-[320px]">
          <h2 className="font-bold mb-4  text-[40px] text-center text-black pt-32 leading-[46px] ">Explore Our Secrets</h2>
          <Swiper
            className='custom-swiper-class'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true, horizontalClass: 'pt-12', bulletClass: "swiper-pagination-bullet custom-swiper-bullet", bulletActiveClass: "swiper-pagination-bullet-active custom-swiper-bullet-active" }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover sm:w-[200] sm:h-[257px]' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover w-[200] h-[257px]' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover w-[200] h-[257px]' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover w-[200] h-[257px]' alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="py-48 mt-[800px] bg-[#010A20] bg-opacity-90 text-center ">
          <h2 className="mx-auto font-bold mb-4 text-[60px] text-white leading-[46px]">By The Numbers</h2>
          <p className="mx-auto text-base sm:text-lg max-w-md font-normal text-gray-400 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="grid grid-cols-3 gap-10 items-center">
            <div className="item">
              <h2 className="mx-auto font-bold mb-4 max-w-md text-[40px] text-[#DD2242] leading-[46px]">100+</h2>
              <p className="text-base sm:text-lg font-normal max-w-xs mx-auto text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
            </div>
            <div className="item">
              <h2 className="mx-auto font-bold mb-4 max-w-md text-[40px] text-[#DD2242] leading-[46px]">43,000+</h2>
              <p className="text-base sm:text-lg font-normal max-w-xs mx-auto text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
            </div>
            <div className="item">
              <h2 className="mx-auto font-bold mb-4 max-w-md text-[40px] text-[#DD2242] leading-[46px]">30+</h2>
              <p className="text-base sm:text-lg font-normal max-w-xs mx-auto text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Swiper

        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </div>
  )
}


