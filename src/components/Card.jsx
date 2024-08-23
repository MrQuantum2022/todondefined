import React from 'react'
import banner from '../assets/banner1.png'
import { SlCalender } from "react-icons/sl";
import { FaCommentDots } from "react-icons/fa";
import Button from './Button';

export default function Card() {
  return (
    <div className=' flex justify-center items-center mt-12 ' >
        <div className='flex flex-col w-5/6 mx-7 '>
            <img src={banner} className='shadow-md' alt="" />
            <div className=''>
                <div className='text-3xl my-2 w-100 font-semibold'> Internal Hackathon for SIH(2024) is going to be held on September 04 in Keshav Mahavidyalaya </div>
                <div className='flex justify-between items-center my-1 h-10' >
                  <div className='flex justify-center items-center gap-2 text-red-800'> <SlCalender />04/september/2024</div>
                  <div className='flex justify-center items-center gap-2  text-red-800' ><FaCommentDots/> leave comment </div>
                </div>
                <div >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum recusandae dignissimos architecto ratione voluptate perferendis voluptas vel dolore nobis laudantium temporibus sint cumque distinctio quia, et similique! Voluptates blanditiis impedit at est, dolore natus recusandae itaque officiis ab illum eveniet. Ad ab nesciunt quibusdam qui quia similique! Quos dolorem aliquid voluptatibus necessitatibus incidunt repellat quaerat veniam. Molestiae est exercitationem id autem molestias, praesentium natus impedit aperiam nemo enim dicta error explicabo laudantium eos repellat nobis. Consequatur laudantium earum dolorum ipsam porro nam alias nostrum similique asperiores, dolorem iusto voluptate deleniti at quia veniam dignissimos ut praesentium. Officia nobis aut.
                </div>
                <div className='font-semibold my-3'><a href="https://sih.gov.in/sih2024PS">
                <span className='font-normal'>The varied</span> #themes of #SIH2024 <span className='font-normal'>includes </span>#SmartAutomation, #Fitness&Sports, #Heritage&Culture, #Medtech/Biotech/Health tech, #AgricultureFoodtech & Rural Development, #SmartVehicles, #Transportation & Logistics, #Robotics & Drones, #SpaceTechnology, #Clean & Green Technology, #Travel & Toursim, #Renewable/Sustainable Energy, #Blockchain & Cyber Security, # Smart Education, #DisasterManagement, #Toys & Games, #SmartResourceConservation, #Miscellaneous.
                </a>
                </div>
            </div>
            <Button/>
        </div>
        
    </div>
  )
}
