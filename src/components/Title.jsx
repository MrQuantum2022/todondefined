import React from "react";
import logo from "../assets/logokmv.jpg"
import independence from "../assets/pngtree-happy-independence-day-india-png-image_13291132.webp"
import g20 from '../assets/G20 PNG Logo - Graphic tasveer.webp'
import sih from '../assets/sih.png'


export default function Title() {
  return (
    <>
      <div className=" flex bg-red-800 justify-around p-1 roboto items-center  lg:gap-5 shadow-md "> 
        <div className=" flex justify-center items-center  lg:ml-5">
          <div className=" h-28 w-32">

            <img className="object-fill " src={logo} alt="" />
          </div>
        <div className=" scale-90 text-white flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold roboto-slab-b ">KESHAV MAHAVIDYALAYA</h1>
            <h2>University of Delhi</h2>
            <h2>NAAC Accredited 'A' Grade Cycle 2</h2>
        </div>
        </div>

        <div className="relative lg:flex lg:visible gap-10 hidden bg-red-800 justify-center items-center">
          <img className="h-24" src={independence} alt="" />
          <img className="h-20 bg-blend-difference " src={sih}  alt="" />
          <img className="h-16 " src={g20} alt="" />
        </div>
        </div>
    </>
  );
}
