
import { SlSocialGoogle } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {Password} from './password'


export default function Form(){
    
    
   

    return(
        <div className=" flex flex-col justify-center items-center ">
            <div className="bg-white shadow rounded-xl p-14 m-6 flex flex-col gap-3">
                <div className="flex flex-col gap-3">
            <h1 className="text-grey-900 text-2xl font-bold">Sign up to Sandbox</h1>
            <p className="text-xl text-gray-500 text-start ">Registration takes less than a minute.</p>
            </div>
            <form className="flex flex-col justify-center items-center gap-4 pt-3">

                 <input
                placeholder="Name" 
                type="text"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full 
                focus:ring-2 focus:ring-blue-500 focus:outline-none"/>

                <input
                placeholder="Email" 
                type="email"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full 
                focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                  
                  <Password/>

                <button className="bg-blue-600 text-white rounded-full px-4 py-3 w-full font-bold ">Sign In</button>

                <a href="#" className="text-blue-500 active:underline hover:underline focus:underline pt-2">Forgot Password?</a>
                <p className="text-md">Already have an account? <span className="text-blue-500">Sign In</span></p>

               <div className="flex items-center gap-3 my-4 w-full">
          <div className="flex-1 h-px bg-gray-300 "></div>
          <span className="text-gray-500 text-sm">Or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

                <div className="flex gap-3 text-white">
                    <div className="w-10 h-10 rounded-full bg-red-700 flex justify-center items-center">
                     <a href="#">
                        <SlSocialGoogle />
                     </a>
                    </div>
                     <div className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center">
                        <a href="#">
                            <FaFacebookF />
                        </a>
                     </div>
                      <div className="w-10 h-10 rounded-full bg-cyan-300 flex justify-center items-center">
                        <a href="#"><FaTwitter /></a>
                      </div>
                
                </div>
            </form>
            </div>
        </div>
    )
}