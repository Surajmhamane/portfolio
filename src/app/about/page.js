"use client"

import Navbar from "../navbar";

export default function Page(){
    return(
        <div className="flex bg-gradient-to-t from-gray-900 to-gray-950">
            <div className="w-60">
            <Navbar/>
            </div>
            
            <div className="text-white">
                hello
            </div>
        </div>
    );
}