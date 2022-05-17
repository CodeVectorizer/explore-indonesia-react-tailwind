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
    <div className='scroll-smooth hover:scroll-auto' id='home'>
      <div className='after:content-[""] after:absolute after:inset-0 relative block bg-[url("/bg-hero.png")] after:bg-gradient-to-t after:from-black after:to-gray-900 after:opacity-30 z-10 after:-z-20 bg-cover bg-center'>
        {/* Mobile Nav */}
        <div className='px-[30px] py-8 flex items-center mx-auto max-w-7xl sm:max-w-full'>
          <span className="mr-auto sm:mr-6"><Image src="/explore-indonesia-logo-w.png" alt="me" width="145" height="48px" /></span>
          <div className="sm:flex hidden items-center mr-auto">

            <Link href="#destination">
              <a href="#" className="text-xs mx-6 uppercase font-bold text-white">Destination</a>
            </Link>
            <Link href="#experience">
              <a href="#" className="text-xs mx-6 uppercase font-bold text-white">Experience</a>
            </Link>
            <Link href="#about">
              <a href="#" className="text-xs mx-6 uppercase font-bold text-white">About</a>
            </Link>
            <Link href="#gallery">
              <a href="#" className="text-xs mx-6 uppercase font-bold text-white">Gallery</a>
            </Link>
          </div>
          <span className="mr-7 cursor-pointer"><Image src="/search.svg" alt="me" width="24" height="24" /></span>
          <span className='cursor-pointer'><Image src="/menu.svg" alt="me" width="24" height="24" /></span>
        </div>

        {/* Hero Section */}
        <div className="relative mx-[30px] sm:mr-0 z-0 grid grid-cols-1 justify-items-start sm:mt-[132px] sm:ml-[218px]">
          <h1 className="mr-auto my-4 text-[58px] sm:text-[92px]  uppercase font-black text-white leading-[63px] sm:leading-[130px]">Explore <br /> Indonesia</h1>
          <ButtonPrimary text="Start Traveling" />

          <div className="flex flex-col sm:w-full sm:flex-row items-start justify-start  mt-[54px]  before:bg-black before:content-[''] before:absolute before:inset-0 before:opacity-60 before:-z-10 w-full relative">
            <HeroCardItem number="01" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum." />
            <HeroCardItem number="02" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum." />
            <HeroCardItem number="03" title="Lorem Ipsum" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, laborum." />

            <div className="relative w-full h-full">
              <img className="sm:absolute w-full sm:h-[120%] bottom-0 right-0 left-0 object-cover " src="/hero-video-image.png" alt="me" />
              <span className="absolute  top-1/2 sm:top-[40%]  right-1/2 translate-x-1/2 -translate-y-1/2 cursor-pointer flex justify-center sm:items-center items-center">
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
        <div className="sm:px-[250px]">
          <h2 className="font-bold mb-4  text-[40px] text-center text-black pt-24 leading-[40px] ">Explore Our Secrets</h2>
          <Swiper
            className='custom-swiper-class'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, horizontalClass: 'pt-12', bulletClass: "swiper-pagination-bullet custom-swiper-bullet", bulletActiveClass: "swiper-pagination-bullet-active custom-swiper-bullet-active" }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover sm:w-[318px] rounded-lg sm:h-[202px]' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover w-[318px] rounded-lg h-[202px]' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover w-[318px] rounded-lg h-[202px]' alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className='my-4 flex justify-center'>
                <img src="/video-image-1.png" className='object-cover w-[318px] rounded-lg h-[202px]' alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="py-[156px] mt-[513px] bg-[#010A20] bg-opacity-90 text-center ">
          <h2 className="mx-auto font-bold mb-14 text-[60px] text-white leading-[40px]">By The Numbers</h2>
          <p className="mx-auto text-base sm:text-lg max-w-md font-normal text-gray-400 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center">
            <div className="item">
              <h2 className="mx-auto font-bold mb-4 max-w-md text-[40px] text-[#DD2242] leading-[40px]">100+</h2>
              <p className="text-base sm:text-lg font-normal max-w-xs mx-auto text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
            </div>
            <div className="item">
              <h2 className="mx-auto font-bold mb-4 max-w-md text-[40px] text-[#DD2242] leading-[40px]">43,000+</h2>
              <p className="text-base sm:text-lg font-normal max-w-xs mx-auto text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
            </div>
            <div className="item">
              <h2 className="mx-auto font-bold mb-4 max-w-md text-[40px] text-[#DD2242] leading-[40px]">30+</h2>
              <p className="text-base sm:text-lg font-normal max-w-xs mx-auto text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-48 px-10 bg-transparent text-center relative overflow-hidden">


        <h2 className="mx-auto max-w-md text-center font-bold text-4xl text-black leading-[40px]">Our hills and valleys are like nothing you&apos;ve seen.</h2>
        <p className="mx-auto text-base sm:text-lg max-w-md font-normal text-gray-400 my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ButtonPrimary text="Learn More" />
        <span className="absolute block -z-10 sm:top-0 -top-40 left-0 ">
          <img src="/ornament2.png" className='object-contain rotate-90 transform   sm:rotate-0' alt="" />
        </span>
        <span className="absolute block -z-10 sm:bottom-0 -bottom-0 right-0">
          <img src="/ornament1.png" className='object-cover' alt="" />
        </span>
      </div>

      <div className="px-8 py-[111px] bg-[#010A20] bg-opacity-60 before:bg-cover before:bg-right relative before:content-[''] before:absolute before:inset-0 before:block before:-z-20  before:bg-[url('/bg-section-video.png')]" id='about'>
        <h2 className="mx-auto sm:max-w-4xl max-w-xs leading-[46px] text-center font-bold text-[40px] mb-20 text-white ">Live a life like you wouldn&apos;t imagine, experience a life you wouldn&apos;t expect.</h2>
        <div className={`relative text-center mx-auto h-full mb-10`}>
          <Image src="/video-image-3.png" width={830} height={467} />
          <span className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 cursor-pointer ">
            <img src="/icon-play-primary.svg" alt="" />
          </span>
        </div>
        <div className="sm:max-w-4xl mx-auto grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-4 text-center sm:text-left justify-items-start sm:items-start gap-0 sm:gap-10">
          <div className="img-wrapper">
            <div className={`relative text-center mx-auto sm:h-auto `}>
              <Image src="/video-image-4.png" width={830} height={467} />
              <span className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer ">
                <img src="/icon-play-w.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="text-wrapper">
            <h2 className="text-2xl sm:text-sm text-white font-bold leading-[33px] my-5 sm:mt-0">In The Country</h2>
            <p className="text-base sm:text-sm font-normal max-w-xs mx-auto text-gray-300 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
          </div>
          <div className="img-wrapper">
            <div className={`relative text-center mx-auto sm:h-auto `}>
              <Image src="/video-image-5.png" width={830} height={467} />
              <span className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer ">
                <img src="/icon-play-w.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="text-wrapper">
            <h2 className="text-2xl sm:text-sm text-white font-bold leading-[33px] my-5 sm:mt-0">In The City</h2>
            <p className="text-base sm:text-sm font-normal max-w-xs mx-auto text-gray-300 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
          </div>
        </div>
      </div>
      <div className="px-8 py-[111px]" id='gallery'>
        <h2 className="mx-auto sm:max-w-4xl max-w-xs leading-[46px] text-center font-bold text-[40px] mb-5 text-black ">Photo Gallery</h2>
        <p className="text-base text-center sm:text-sm font-normal max-w-xs mx-auto text-gray-500 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
        <div className="mx-auto max-w-4xl grid grid-cols-2 grid-rows-3 sm:grid-rows-2 sm:grid-cols-3  grid-flow-cols items-start gap-4">
          <div className="w-full h-full row-span-2 order-1 sm:order-1">
            <img
              src="/image-6.png"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded-xl " />
          </div>
          <div className="h-full w-full order-2 sm:order-2">
            <img
              src="/image-4.png"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded-xl " />
          </div>
          <div className="w-full h-full row-span-2 order-3 sm:order-4">
            <img
              src="/image-3.png"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded-xl " />
          </div>
          <div className="w-full h-full order-4 sm:order-4 sm:row-span-1 row-span-1">
            <img
              src="/image-5.png"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded-xl " />
          </div>
          <div className="w-full h-full sm:row-span-2 row-span-1 order-5 sm:order-2">
            <img
              src="/image-2.png"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded-xl " />
          </div>
          <div className="w-full h-full order-6 sm:order-6">
            <img
              src="/image-1.png"
              alt=""
              className="inset-0 h-full w-full object-cover object-center rounded-xl " />
          </div>
        </div>
        {/* <div className="grid grid-cols-2 grid-rows-10 grid-flow-col">
          <div className="item h-full w-full row-span-2 relative">
            <img src="/image-6.png" className="absolute inset-0  w-full h-full" />
          </div>
          <div className="item h-full w-full relative">
            <img src="/image-4.png" className="absolute inset-0  w-full h-full" />
          </div>
          <div className="item h-full w-full row-span-2 relative">
            <img src="/image-2.png" className='absolute inset-0' />
          </div>
          <div className="item h-full w-full relative">
            <img src="/image-4.png" className="absolute inset-0  w-full h-full" />
          </div>
          <div className="item h-full w-full relative">
            <img src="/image-4.png" className="absolute inset-0  w-full h-full" />
          </div>
        </div> */}
      </div>
      <div className="px-8 sm:px-[304px] py-[111px] bg-[#DCE8F2]">
        <h2 className="leading-[46px] text-center sm:text-left font-bold text-[40px] mb-12 text-black ">Getting There</h2>
        <div className="flex justify-center sm:justify-start flex-col items-center sm:items-start">
          <div className="text-center sm:text-left sm:border-l-2 ">
            <span className="text-2xl sm:mx-0 mb-8 sm:mb-0 mx-auto  text-white text-center w-14 h-14 rounded-full relative font-bold leading-[100%]  bg-[#DD2242] after:content-[''] after:absolute after:inset-0 z-10 flex items-center justify-center">1</span>
            <div className="ml-0 pb-8 sm:ml-16 sm:-mt-10 before:bottom-0 sm:before:content-[''] before:border-l-2 before:border-gray-300 before:h-full before:w-full before:absolute relative before:right-[36px] before:z-0">
              <h2 className="text-2xl sm:text-xl text-black font-bold leading-[33px] my-5 sm:mt-0">Booking your flights</h2>
              <p className="text-base sm:text-sm font-normal text-gray-500 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.</p>
              <span className='sm:hidden inline text-base sm:text-sm font-normal text-[#DD2242] mb-8'><Link href={"#"}>Show More</Link></span>
            </div>
          </div>
          <div className="text-center sm:text-left sm:border-l-2 ">
            <span className="text-2xl sm:mx-0 mb-8 sm:mb-0 mx-auto  text-white text-center w-14 h-14 rounded-full relative font-bold leading-[100%]  bg-[#DD2242] after:content-[''] after:absolute after:inset-0 z-10 flex items-center justify-center">2</span>
            <div className="ml-0 pb-8 sm:ml-16 sm:-mt-10 before:bottom-0 sm:before:content-[''] before:border-l-2 before:border-gray-300 before:h-full before:w-full before:absolute relative before:right-[36px] before:z-0">
              <h2 className="text-2xl sm:text-xl text-black font-bold leading-[33px] my-5 sm:mt-0">Booking your flights</h2>
              <p className="text-base sm:text-sm font-normal text-gray-500 mb-2 sm:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.</p>
              <div className="grid grid-cols-1 mx-auto sm:mx-0 gap-4 sm:grid-cols-2 justify-content-center sm:justify-items-start max-w-full sm:max-w-sm">
                <div className="img-wrapper">
                  <div className={`relative text-center mx-auto sm:h-auto `}>
                    <Image src="/video-image-4.png" width={192} height={130} />
                    <span className="absolute sm:p-0 p-20 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer ">
                      <img src="/icon-play-w.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="text-wrapper">
                  <h2 className="text-2xl sm:text-base text-black font-bold leading-[33px] my-5 sm:my-0 sm:mt-0 hidden sm:block">In The Country</h2>
                  <p className="text-base sm:text-sm font-normal max-w-xs mx-auto text-gray-500 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
                </div>
              </div>
              <span className='sm:hidden inline text-base sm:text-sm font-normal text-[#DD2242] mb-8'><Link href={"#"}>Show More</Link></span>

            </div>
          </div>
          <div className="text-center sm:text-left sm:border-l-2 ">
            <span className="text-2xl sm:mx-0 mb-8 sm:mb-0 mx-auto  text-white text-center w-14 h-14 rounded-full relative font-bold leading-[100%]  bg-[#DD2242] after:content-[''] after:absolute after:inset-0 z-10 flex items-center justify-center">3</span>
            <div className="ml-0 pb-8 sm:ml-16 sm:-mt-10 before:bottom-0 sm:before:content-[''] before:border-l-0 before:border-gray-300 before:h-full before:w-full before:absolute relative before:right-[36px] before:z-0">
              <h2 className="text-2xl sm:text-xl text-black font-bold leading-[33px] my-5 sm:mt-0">Booking your flights</h2>
              <p className="text-base sm:text-sm font-normal text-gray-500 mb-2 sm:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. Sed euismod orci dictum faucibus malesuada. Praesent sed eros tincidunt, viverra neque auctor, lobortis enim.</p>
              <span className='sm:hidden inline text-base sm:text-sm font-normal text-[#DD2242] mb-8'><Link href={"#"}>Show More</Link></span>
              <span className='hidden sm:block'>
                <ButtonPrimary text="Learn More" />

              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative sm:flex-row justify-center sm:justify-between items-center bg-[#010A20] py-7 px-24">
        <Link href="#destination">
          <span className="text-2xl cursor-pointer sm:mx-0 sm:mb-0 mx-auto  text-white text-center w-14 h-14 rounded-full absolute -top-6 sm:right-8 right-0  font-bold leading-[100%]  bg-[#DD2242] after:content-[''] after:absolute after:inset-0 z-10 flex items-center justify-center">
            <img src="/arrow-up.png" alt="" srcSet="" />
          </span>
        </Link>
        <span className="sm:mr-auto mr-0 mt-20 sm:mt-0"><Image src="/explore-indonesia-logo.png" alt="me" width="145" height="48px" /></span>

        <div className="flex flex-col sm:flex-row items-center sm:mr-auto mr-0">

          <Link href="#destination">
            <a href="#" className="text-xs sm:my-0 my-2 mx-6 font-bold text-white">Destination</a>
          </Link>
          <Link href="#experience">
            <a href="#" className="text-xs sm:my-0 my-2 mx-6 font-bold text-white">Experience</a>
          </Link>
          <Link href="#about">
            <a href="#" className="text-xs sm:my-0 my-2 mx-6 font-bold text-white">About</a>
          </Link>
          <Link href="#gallery">
            <a href="#" className="text-xs sm:my-0 my-2 mx-6 font-bold text-white">Gallery</a>
          </Link>
        </div>
        <div className="flex flex-row sm:my-0 my-2  items-center">
          <span>
            <img className="mx-2" src="/Facebook.png" alt="" />
          </span>
          <span>
            <img className="mx-2" src="/Linkedin.png" alt="" />
          </span>
          <span>
            <img className="mx-2" src="/Google.png" alt="" />
          </span>
        </div>
        <p className="ml-2 font-bold text-xs text-white">Copyright &copy; 2022</p>

      </div>
    </div >
  )
}


