import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  const phoneNumber = '+91 9418454877';
  const whatsappNumber = '+91 9418464877';
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-col flex-1 items-start
        justify-center gap-12'>
           <h2 className='bold-40 lg:bold-64 xl:max-w-[420px]'>Book your Room now!</h2>
           <p className='regular-16 text-gray-10 '> Rooms starting at just <strong>INR 2500</strong>. Give us a call to know availability!</p>
         
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'> 
          <Button 
          href={`tel:${phoneNumber}`}
          type="button"
          title='Call Us Now!'
          icon='/apple.svg'
          variant='btn_white'
          full/>

        <Button 
        href={`tel:${whatsappNumber}`}
          type="button"
          title=' WhatsApp us!'
          icon='/android.svg'
          variant="btn_dark_green"
          full/>
          </div>
         </div>

         <div className='flex flex-1 items-center justify-end'>
          <Image 
          src="/phones.png"
          alt='phones' 
          width={550}
          height={870}/>

         </div>

        </div>
      

    </section>
  )
}

export default GetApp
