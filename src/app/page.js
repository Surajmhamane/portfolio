"use client"
import Navbar from "./navbar"
export default function Home() {
  return (
    <div className="text-gray-400 bg-gradient-to-t from-gray-900 to-gray-950 w-full h-screen text-center">
        <div>
        <Navbar/>
        </div>
        <div className="flex">
            <div className="w-7/12 m-7 text-left absolute top-52 left-10 ml-32">
              <h3 className="text-2xl text-gray-500 shadow-sm  font-serif"> Hello </h3>
              <h1 className=" text-white text-5xl font-serif " > I'm  <span className="text-blue-900 font-semibold font-sans tracking-wide"> Suraj Mhamane</span></h1>
              <br/>
              <h1 className=" text-white text-5xl font-serif " >Web  <span className="text-gray-700 font-bold tracking-wide animate-pulse delay-200 duration-500"> Developer</span></h1>
              <br/>
              <button className="relaive top-5 w-40 h-14 text-2xl bg-gray-900 border-2 border-gray-600 text-white font-mono rounded-full hover:shadow-sm hover:shadow-gray-200">
                My Resume
              </button>
            </div>
            <div className=" absolute right-32 top-48  pr-4 pb-4 bg-gray-900" >
              <img src="https://i.pinimg.com/564x/91/58/dd/9158dd411663f29b26f2ba5565dfe563.jpg" alt="nothing" className=" w-96" />
            </div>
        </div>
    </div>
     
    
  );
}
