'use client'
import { KeyboardArrowDownOutlined, StarBorderPurple500Outlined, PeopleAltOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState } from 'react'

const Dropbox:React.FC = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show); // Toggle the value of 'show'
    };

    return (

        <div className='flex flex-col justify-center items-center rounded-[20px] bg-pink-100'>
            <div className='flex flex-row gap-4 justify-center items-center px-2 py-4'>
                <StarBorderPurple500Outlined className='text-yellow-500 text-[25px] bg-slate-50 p-1 rounded-full' />
                <button type='button' onClick={handleToggle} className='text-[14px]'>Starred Messages</button>
                <KeyboardArrowDownOutlined />
            </div>
            <div className={`${show ? 'flex' : 'hidden'} justify-start gap-4 items-center`}>
                <div className='px-2 py-2 border-2 border-t-slate-50 flex flex-col justify-start self-start gap-4 items-center border-b-transparent border-l-transparent border-r-transparent'>
                    <div className='flex justify-start items-center self-start hover:bg-pink-50 w-[100%] p-2 rounded-full'>
                        <PeopleAltOutlined />
                        <p className='text-[13px] font-semibold pl-2 cursor-pointer'>Message From Paul</p>
                    </div>
                    <div className='flex justify-start items-center self-start hover:bg-pink-50 w-[100%] p-2 rounded-full'>
                        <PeopleAltOutlined />
                        <p className='text-[13px] font-semibold pl-2 cursor-pointer'>Message From +23490..</p>
                    </div>
                    <div className='flex justify-start items-center self-start hover:bg-pink-50 w-[100%] p-2 rounded-full'>
                        <PeopleAltOutlined />
                        <p className='text-[13px] font-semibold pl-2 cursor-pointer'>Message From John</p>
                    </div>
                    <div className='flex justify-start items-center self-start hover:bg-pink-50 w-[100%] p-2 rounded-full'>
                        <PeopleAltOutlined />
                        <p className='text-[13px] font-semibold pl-2 cursor-pointer'>Message From Dev</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropbox;