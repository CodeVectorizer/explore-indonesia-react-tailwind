const HeroCardItem = ({number, title, description}) => {
    return <div className="sm:my-4 my-2 px-7 w-full py-[32px] sm:py-11">
      <h3 className="text-base font-black text-pink-700">{number}</h3>
      <h2 className='text-white text-[26px] font-bold leading-10'>{title}</h2>
      <p className="text-base sm:text-lg font-normal text-gray-400">{description}</p>
    </div>
  }
  
  export default HeroCardItem;