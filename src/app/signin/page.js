'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleLogin = () => {
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);
        setFormData({ username: '', password: '' });
    };

    return (
        <div>
            <div className='bg-custom-headblue h-[120px]  flex items-center justify-between'>
                <Image src="/gameDev.svg" alt="Video Game Remote" height={120} width={141} className='max-h-[120px] max-w-[120px] min-h-[90px] min-w-[90px]' />
                <Image src="/cloudIcon.svg" alt="IOTFiy Icon " height={120} width={141} className='max-h-[120px] max-w-[120px] min-h-[90px] min-w-[90px]' />
                <Image src="/gameDev.svg" alt="Video Game Remote" height={120} width={141} className='max-h-[120px] max-w-[120px] min-h-[90px] min-w-[90px]' />
            </div>
            <div className='flex items-center justify-center relative'>
                <Image src="/signinbgImage.png" height={945} width={760} />



                <div class="flex flex-col space-y-4 max-w-[350px] min-w-[280px] mx-auto  fixed top-[40%] sm:top-[50%] ">
                    <div class="flex items-center border rounded-md bg-white  border-black">
                        <Image src="/User.svg" height={20} width={20} className='mx-2  ' />
                        {/* <div class="h-full w-[1px] "></div> */}
                        <input
                            type="text"
                            placeholder="Username"
                            className="flex-1 px-3 py-2 focus:outline-none   rounded-r-md border-l-[1px] border-black "
                            onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
                            value={formData.username}
                        />

                    </div>

                    <div class="flex items-center border  rounded-md  bg-white border-black" >
                        <Image src="/Key.svg" height={20} width={20} className='mx-2' />
                        {/* <div class="h-full w-[1px] "></div> */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="flex-1 px-3 py-2 focus:outline-none   rounded-r-md border-l-[1px] border-black "
                            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                            value={formData.password}
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='w-[100px] h-[40px] rounded-lg bg-custom-buttoncolor text-white' onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Page