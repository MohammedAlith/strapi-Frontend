"use client"
import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
 export  function Password(){
    const [open,setOpen]=useState(true);
    return(
       
              <div className="flex relative md:w-full">
                   <input
                placeholder="password"
                type={open ? "text": "password"}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                <button  onClick={() => setOpen(!open)} className="absolute right-5 top-3">
             {open ? <FaEyeSlash /> : <FaEye />}
                </button>
                </div>
    )
 }