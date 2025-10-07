"use client"
import { useState, useEffect} from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


export default function faqClient(){
    const[show, setShow]=useState(false);
    const[loading, setLoading]=useState(true);
    const options={
        questions:"How do I get my subscription receipt?",
        Answers:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis."
    }
 
    useEffect(() => {
    setLoading(false);
  }, []);

  if(loading){
 return<p className="flex items-center w-full text-3xl text-blue-500">Loading</p>
  }
    return(
        !loading&&(
        <div className="flex flex-col gap-3">
            <div className="bg-white flex flex-col shadow-lg p-5 rounded-md text-lg gap-3">
                <div className="flex gap-3 text-blue-500">
                <button onClick={(

                )=>setShow(!show)}>{!show?<FaChevronDown/>:<FaChevronUp/>}</button>
                <h1 >{options.questions}</h1>
                </div>
                <div className="ps-8">
                {show&&
                <p className="text-gray-500">{options.Answers}</p>}
                </div>
            </div>

            <div className="bg-white flex flex-col shadow-lg p-5 rounded-md text-lg gap-3">
                <div className="flex gap-3 text-blue-500">
                <button onClick={(

                )=>setShow(!show)}>{!show?<FaChevronDown/>:<FaChevronUp/>}</button>
                <h1 >{options.questions}</h1>
                </div>
                <div className="ps-8">
                {show&&
                <p className="text-gray-500">{options.Answers}</p>}
                </div>
            </div>

            <div className="bg-white flex flex-col shadow-lg p-5 rounded-md text-lg gap-3">
                <div className="flex gap-3 text-blue-500">
                <button onClick={(

                )=>setShow(!show)}>{!show?<FaChevronDown/>:<FaChevronUp/>}</button>
                <h1 >{options.questions}</h1>
                </div>
                <div className="ps-8">
                {show&&
                <p className="text-gray-500">{options.Answers}</p>}
                </div>
            </div>

            <div className="bg-white flex flex-col shadow-lg p-5 rounded-md text-lg gap-3">
                <div className="flex gap-3 text-blue-500">
                <button onClick={(

                )=>setShow(!show)}>{!show?<FaChevronDown/>:<FaChevronUp/>}</button>
                <h1 >{options.questions}</h1>
                </div>
                <div className="ps-8">
                {show&&
                <p className="text-gray-500">{options.Answers}</p>}
                </div>
            </div>

            
        </div>

    ))
}