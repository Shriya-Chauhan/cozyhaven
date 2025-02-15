import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
    <div className='padding-container max-container w-full pb-24'>
      <Image src="/camp.svg" alt='camp' width={50}height={50}/>
      <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
        We are here for you
      </p>
      <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
        <h2 className='bold-40 lg:bold-64 xl: max-w-[390px]'>About Us</h2>
        <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
        Welcome to Cozy Haven Homestay, your sanctuary in the heart of Shimla. 
        At Cozy Haven, we pride ourselves on creating an easy and enjoyable experience for our guests. Our friendly staff is dedicated to making your stay as comfortable and enjoyable as possible.
        With excellent reviews from our guests, you can trust that Cozy Haven is the perfect choice for your next vacation. <strong>Join us at Cozy Haven Homestay and experience the tranquility and hospitality that set us apart. Book your stay today and let us guide you to an easy path to relaxation and adventure.</strong></p>

      
       
      </div>
    </div>

    <div className='flexCenter max-container relative  lg:h-[80%]'>
      <Image 
      src="/img-1.jpg"
      alt='boat'
      width={1440}
      height={580}
      className='w-full object-cover object-center 2xl:rounded-5xl' />
      <div className='absolute flex bg-white  py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
        <Image
        src='/meter.svg'
        alt='meter'
        width={16}
        height={158}
        className='h-full w-auto'
        />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'> Destination</p>
                <p className='bold-16 text-green-50'>32 min</p>
              </div>
              <p className='bold-20 mt-2'>Mehli, Near Shimla</p>
            </div>
            <div className='flex w-full flex-col'>
              
                <p className='regular-16 text-gray-20'> Prime Location</p>
                <p className='bold-20 mt-2 white-space-nowrap'>Shimla</p>
            </div>

          </div>
      </div>
    </div>
    
    </section>
  )
}

export default Guide
