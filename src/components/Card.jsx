import React from 'react'
import banner from '../assets/sih-updated.png'
import { SlCalender } from "react-icons/sl";
import { FaCommentDots } from "react-icons/fa";
import Button from './Button';

export default function Card() {
  return (
    <div className=' flex justify-center items-center mt-12 ' >
        <div className='flex flex-col w-5/6 mx-7 '>
            <img src={banner} className='shadow-md' alt="" />
            <div className=''>
                <div className='text-3xl my-2 w-100 font-semibold '> Internal Hackathon for SIH(2024) is going to be held on September 04 in Keshav Mahavidyalaya </div>
                <div className='flex justify-between items-center my-1 h-10' >
                  <div className='flex justify-center items-center gap-2 text-red-800'> <SlCalender />04/september/2024</div>
                  <div className='flex justify-center items-center gap-2  text-red-800' ><FaCommentDots/> leave comment </div>
                </div>
                <div  className='text-justify'>
                Keshav Mahavidyalaya, University of Delhi (Pitampura) is conducting an Internal Hackathon for SIH (Smart India Hackathon) 2024 on September 04, 2024 from 1:00 PM onwards, which is going to be a college-level shortlisting & nomination process for National-Level SIH participation.
                </div>
                <br />
                <p className='text-justify' >
                Smart India Hackathon 2024 is a premiere nationwide initiative designed to engage students in solving some of the most pressing challenges faced in everyday life. Launched to foster a culture of innovation and practical problem-solving, SIH provides a dynamic platform for students to develop and showcase their creative solutions to real-world problems. By encouraging participants to think critically and innovatively, the Smart India Hackathon aims to bridge the gap between academic knowledge and practical application.
                </p>
                <div className='font-semibold my-3 text-blue-400 '><a href="https://sih.gov.in/sih2024PS">
                <span className='font-normal '>The varied</span> #themes of #SIH2024 <span className='font-normal'>includes </span>#SmartAutomation, #Fitness&Sports, #Heritage&Culture, #Medtech/Biotech/Health tech, #AgricultureFoodtech & Rural Development, #SmartVehicles, #Transportation & Logistics, #Robotics & Drones, #SpaceTechnology, #Clean & Green Technology, #Travel & Toursim, #Renewable/Sustainable Energy, #Blockchain & Cyber Security, # Smart Education, #DisasterManagement, #Toys & Games, #SmartResourceConservation, #Miscellaneous.
                </a>
                </div>
            </div>
            <Button/>
        </div>
        
    </div>
  )
}
