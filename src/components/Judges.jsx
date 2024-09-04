import React from "react";
import { CgProfile } from "react-icons/cg";
import SummitSir from "..\\assets\\summitSir.png"
import BhavnaMam from "../assets/BhavnaMam.png"
import anjaliMam from "../assets/anjaliMam.png"
import ashutoshaSir from "../assets/AshutoshSir.png"
import nehaMam from "../assets/NehaMam.png"
import panjabisir from "../assets/panjabisir.jpg"
 
export default function Judges() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-4xl  font-semibold mt-5 pb-10 text-center">Judges of the<br className="lg:hidden"/> Internal SIH 2024</h1>
      <div className="w-5/6 grid grid-cols-1 lg:grid-cols-3 ">
      <div className="relative flex my-5 flex-col items-center justify-between">
          <img src={anjaliMam} className="h-60 w-60 border-4 border-white  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl font-semibold">Dr. Anjali Thukral </h1>
            <h2 className=" ">Associate Professor</h2>
            <h2 className="text-sm w-72 lg:text-xs text-justify"><br></br>Dr. Anjali Thukral is an Associate Professor in the Department of Computer Science at Keshav Mahavidyalaya, University of Delhi, India. With over 25 years of experience in teaching, she has attained her PhD in Computer Science from the same university in 2013. She has numerous publications in international journals and conferences and has also authored book chapters. Her research interests are focused on information retrieval, knowledge representation, and reasoning using ontology, knowledge graphs, and semantic web technologies, particularly in the areas of e-learning and disease diagnosis systems.</h2>
          </div>
        </div>
        
        <div className="relative flex my-5 flex-col   items-center  justify-between">
          <img src={BhavnaMam} className="h-60 w-60 border-4 border-white shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl font-semibold">Dr. Bhavna Gupta</h1>
            <h2 className=" ">Associate Professor</h2>
            <h2 className="text-sm w-72 lg:text-xs text-justify"><br></br>Dr. Bhavna Gupta is currently working as an Associate Professor in the Department of Computer Science, Keshav Mahavidyalaya College, University of Delhi. She did her doctorate in computer science from the Department of Computer Science, University of Delhi in 2014. She has over 24 years of teaching experience. She has published various research papers in international journals and conferences. Her research interests include Artificial Intelligence, Multi Agent Systems, Trust-based Recommender systems, Information Retrieval, Cloud Computing and Artificial Intelligence in Healthcare, Natural language Processing.</h2>
          </div>
        </div>
        <div className="relative flex my-5 flex-col items-center justify-between">
          <img src={nehaMam} className="h-60 w-60 border-4 border-white  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl font-semibold">Prof. Neha Sharma </h1>
            <h2 className=" ">Professor</h2>
            <h2 className="text-sm w-72 lg:text-xs text-justify"><br></br>Prof. Neha Sharma is currently working as Professor in the Department of Electronics, Keshav Mahavidyalaya, University of Delhi. She did her doctorate in Optoelectronics from the Department of Electronic Science, University of Delhi, South Campus. Prof. Sharma has numerous research publications in International journals and Conferences. Her area of research includes Spintronics. Magnetic ultrathin films and heterostructure. Nanowires, nanoparticles. Applications & device fabrication to MMICs, Spin-transistors, Sensors, Nanoparticle based Cancer detection & therapy.</h2>
          </div>
        </div>
        
        </div>
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-3">
        <div className="relative flex my-5 flex-col items-center justify-between">
          <img src={SummitSir} className="h-60 w-60 border-4 border-white  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl font-semibold">Dr.Sumit Kumar Aggarwal </h1>
            <h2 className=" ">Assistant Professor</h2>
            <h2 className="text-sm w-72 lg:text-xs text-justify"><br></br>Dr. Sumit Kumar Agarwal is an Assistant Professor in the Department of Computer Science at Keshav Mahavidyalaya, University of Delhi, India. He is also holding a responsibility of deputy coordinator NCWEB Keshav Mahavidyalaya Teaching Center. He received his PhD in Computer Science from the Department of Computer Science, University of Delhi in 2014. He has several publications in international journals and conferences and has also authored book chapters. He is an associate member of the Institution of Electronics and Communication Engineers (IETE), Delhi. His research interests include Web Intelligence, Multi-Agent Systems, Trust, Recommender Systems, Software Engineering and Aspect-oriented Programming.</h2>
          </div>
        </div>
        <div className="relative flex my-5  flex-col items-center justify-start">
          <img src={ashutoshaSir} className="h-60 w-60 border-4 border-white  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl font-semibold">Dr. Ashutosh Singh </h1>
            <h2 className=" ">Assistant Professor</h2>
            <h2 className="text-sm w-72 lg:text-xs text-justify"><br></br>Dr. Ashutosh Singh is a seasoned researcher in the field of Computer Science, having completed his Ph.D. from I.E.T, Lucknow (AKTU, Lucknow).
            His research expertise lies in image processing computer vision Natural language processing with a focus on innovative model architectures.His academic journey includes pushing the boundaries of AI and machine learning, both in theory and practical applications.</h2>
          </div>
        </div>
        <div className="relative flex my-5  flex-col items-center justify-start">
          <img src={panjabisir} className="h-60 w-60 border-4 border-white  shadow-md" alt="" />
          <div className="  flex flex-col text-center">
            <h1 className=" text-2xl font-semibold">Dr. Panjabi Singh </h1>
            <h2 className=" ">Assistant Professor</h2>
            <h2 className="text-sm w-72 lg:text-xs text-justify"><br></br>Dr.Panjabi Singh, Assistant Professor Department of Mathematics at Keshav Mahavidyalaya University of Delhi. Dr.Singh completed Ph.D in 2022 .His research interest in Applied Mathematics and also qualified CSIR NET with JRF and GATE.</h2>
          </div>
        </div>
        </div>
      </div>
 

  );
}
