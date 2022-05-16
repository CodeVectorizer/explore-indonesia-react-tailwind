import React from 'react'
import ButtonPrimary from './ButtonPrimary'

function Card() {
    return (
        <>
            <div className="py-8">
                <h2 className="font-bold mb-4 max-w-md text-[40px] text-white leading-[46px]">The walkways of Indonesia spellbind</h2>
                <p className="text-base sm:text-lg font-normal text-gray-400 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, mollitia!</p>
                <ButtonPrimary text="Learn More" />
            </div>
        </>
    )
}

export default Card