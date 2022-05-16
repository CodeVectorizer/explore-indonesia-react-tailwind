import Image from 'next/image'
import React from 'react'
import Card from './Card'

function CardImage({ src, isReverse = true }) {
    return (
        <>
            <div className="sm:py-[106px] sm:pt-[106] py-[48px] sm:px-[340px] px-[30px] before:bg-[url('/video-image-1.png')] before:bg-center before:absolute before:inset-0 before:bg-cover before:content-[''] relative before:opacity-5">
                {/* <div className={`my-4 block sm:grid grid-cols-2  sm:items-center gap-32`}> */}
                <div className={`my-4 block sm:flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-center `}>
                    <span className={`block w-full sm:w-[690px] text-center ${!isReverse ? 'sm:mr-32' : 'sm:ml-32'}`}>
                        <Image src={src} width={630} height={460} layout="responsive" />
                        {/* <img src={src} alt="" /> */}
                    </span>
                    <Card />
                </div>
            </div >
        </>
    )
}

export default CardImage