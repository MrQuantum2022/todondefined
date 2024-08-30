import React from 'react'

export default function Footer() {
  return (
    <div className='w-screen py-5 bg-amber-600 flex justify-center items-center'>
        <div className='w-auto lg:w-10/12'>
        <div className=' text-white font-semibold text-3xl mb-5'>Student Coordinators</div>
        <div className='text-white flex flex-col lg:flex-row gap-5'>
            <li className='flex flex-col'> Tushar-3rd year
                <div>BSc (H) Computer Science</div>
                <div>9311706455</div>
            </li>
            <li className='flex flex-col'> Nancy-3rd year
            <div>BSc (H) Computer Science</div>
                <div>9260938565</div>
            </li>
            <li className='flex flex-col'> Adarsh Maurya-2nd year
            <div>BSc (H) Computer Science</div>
                <div>7275156652</div>
            </li>
            <li className='flex flex-col'> Anjali-2rd year
            <div>BSc (H) Computer Science</div>
                <div>9334286212</div>
            </li>
        </div>
        <div className='text-white my-4 text-xs lg:text-base'>@All Copyrights are reserved by MrQuantum2022</div>
        </div>
    </div>
  )
}
