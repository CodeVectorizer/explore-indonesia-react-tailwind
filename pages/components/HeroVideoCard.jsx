import React from 'react'

function HeroVideoCard() {
    return (
        <>
            <img className=" w-[200px] h-auto after:content-[''] after:bg-[url('/icon-play-w.svg')] block after:w-6 after:h-6 after:relative" src="/hero-video-image.png" alt="me" />
            <span className="absolute cursor-pointer">
                <img src="/icon-play-w.svg" alt="" />
            </span>
        </>
    )
}

export default HeroVideoCard