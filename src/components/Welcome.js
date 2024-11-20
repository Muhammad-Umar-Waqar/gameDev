import React from 'react'
import CustomDropdown from './CustomSelect'
import Image from 'next/image'

function Welcome() {
  return (
    <>
    <div className="flex flex-col my-10 justify-center items-center px-2">
        <h1 className='logo text-[20px] leading-[27.6px] mb-[60px]'>ARCADE IOTFIY</h1>
        <h2 className='font-poppins font-bold text-[24px] leading-[36px] text-blue-600'>Welcome</h2>
        <p className='text-gray-700  font-poppins font-light text-[15px] leading-[22.5px] '>"Game on! Tap to Play!" 🎮</p>
       <CustomDropdown/>
       <div className='flex w-[278px] my-2 gap-1  justify-start flex-col'>
       <p className='font-light text-left text-xs leading-5'>
        Coins Required: 054
       </p>
       <p className='font-light text-left text-xs leading-5'>
        04 Coins = 1$
       </p>
       </div>
       <h1 className='font-extralight    mt-[20px]'>Choose your payment method</h1>
       <div className='w-[250px] flex items-center justify-around my-10'>
        <Image src="./GooglePay.svg" width={46}  height={46} alt='Google Payment Icon' />
        <Image src="./ApplePay.svg" width={46}  height={46} alt='Google Payment Icon' />
        <Image src="./BamBora.svg" width={46}  height={46} alt='Google Payment Icon' />
       </div>
        <h1 className='text-sm   leading-[18px] text-center'>Tap pay to get started...</h1>
        <button className="px-8 py-2 text-center text-lg text-white mt-[20px] bg-custom-purple rounded-[35px] border border-black">
            Pay
        </button>
        <p className='text-sm font-light mt-[15px]  '>
            Unique ID: 2256-227-567-1
        </p>

    </div>
       </>
  )
}

export default Welcome