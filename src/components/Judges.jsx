import React from "react";
import { CgProfile } from "react-icons/cg";
export default function Judges() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-2xl font-semibold underline my-5 pb-10">Judges</h1>
      <div className="w-5/6 grid grid-cols-1 lg:grid-cols-3 ">
        <div className="relative flex my-5 flex-col items-center justify-between">
          <img src="" className="h-60 w-60  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl">Dr.Summit Aggarwal </h1>
            <h2 className=" ">Associate Professor</h2>
          </div>
        </div>
        <div className="relative flex my-5 flex-col   items-center  justify-between">
          <img src="" className="h-60 w-60  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl">Mr. Anand</h1>
            <h2 className=" ">Associate Professor</h2>
          </div>
        </div>
        <div className="relative flex my-5 flex-col  items-center  justify-between">
          <img src="" className="h-60 w-60  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl">Dr.(Ms.) Namita Aggarwal </h1>
            <h2 className=" ">Associate Professor</h2>
          </div>
        </div>
        </div>
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="relative flex my-5 flex-col  items-center  justify-between">
          <img src="" className="h-60 w-60  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl">Prof.(Ms.) Neha Sharma </h1>
            <h2 className=" ">Professor</h2>
          </div>
        </div>
        <div className="relative flex my-5 flex-col  items-center  justify-between">
          <img src="" className="h-60 w-60  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl">Dr. Ashutosh Singh</h1>
            <h2 className=" ">Associate Professor</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
