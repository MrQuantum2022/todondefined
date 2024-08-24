import React from 'react'

export default function Footer() {
  return (
    <div className='w-screen py-5 bg-amber-600 flex justify-center items-center'>
        <div className='w-auto lg:w-10/12'>
        <div className=' text-white font-semibold text-3xl mb-5'>Student Coordinators</div>
        <div className='text-white flex flex-col lg:flex-row gap-5'>
            <li className='flex flex-col text-xl'> Tushar-3rd year
                <div>9311706455</div>
            </li>
            <li className='flex flex-col text-xl'> Nancy-3rd year
                <div>9260938565</div>
            </li>
            <li className='flex flex-col text-xl'> Adarsh Maurya-2nd year
                <div>7275156652</div>
            </li>
            <li className='flex flex-col text-xl'> Anjali-2rd year
                <div>9334286212</div>
            </li>
        </div>
        <div className='text-white my-4 text-xs lg:text-base'>@All Copyrights are reserved by MrQuantum2022</div>
        </div>
    </div>
  )
}
