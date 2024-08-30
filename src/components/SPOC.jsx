import React from 'react'
import vinitaMam from "../assets/VinitaMam.png"

export default function SPOC() {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <h1 className='text-4xl my-5 font-semibold text-center '>SPOC <br className='lg:hidden' /> Of The College</h1>
        <div className='w-5/6 gap-5 flex flex-col lg:flex-row items-center justify-between'>
        <div className='w-60'>
        <img src={vinitaMam} className='w-60  border-4 border-white shadow-md' alt="" />
        <h2 className='text-2xl font-semibold text-center'>Prof. Vinita Jindal</h2>
            <h2 className=' text-center'>Professor</h2>
        </div>
        
        <div className='w-full flex flex-col items-center justify-center'>
            
            <h3 className='text-sm text-justify'>Vinita Jindal is Professor in the Department of Computer Science, Keshav Mahavidyalaya, University of Delhi. She did her Doctorate in Computer Science from the University of Delhi. She is mainly working in the area of Networks and Artificial Intelligence. Her area of interest includes Fake Review Detection, Internet Protocols, Information Security, Security in Finance, Cloud Security, Vehicular Adhoc Networks, Intrusion Detection Systems, Swarm Intelligence, Network Security, Cyber Security, Machine Learning and Recommender Systems. Currently, she is supervising 5 Ph.D. students and 2 Ph.D. student has successfully completed their PhD. She holds many administrative responsibilities in the college. She was IQAC coordinator for the year 2022-2023 and a member of the IQAC from 2021-2022. She has been working as a coordinator for Foreign Languages (French and German) for the students of both certificate and Diploma courses since 2019 till date. She is also holding the responsibility of RTI Nodal Officer. Further for the year 2023-24, she has joined as a Teacher-in-Charge for NCWEB centre of Keshav Mahavidyalaya. She is the convenor of the Internship Cell of the college and a member of the e-procurement committee of the college to name a few.</h3>
        </div>
        </div>
    </div>
  )
}
