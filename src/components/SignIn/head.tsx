import { FaAngleRight } from "react-icons/fa";

export default function head(){
    return(
        <div
  className="bg-gradient-to-t from-pink-300 to-blue-200
             w-full h-[350px] flex flex-col justify-start pt-20 items-center gap-3"
>
    <h1 className="text-gray-900 text-3xl font-bold ">Sign In</h1>
    <div className="flex text-md text-gray-500 gap-3">
        <a href="#">Home</a>
        <p className="pt-1">  <FaAngleRight /></p>
        <p>Sign In</p>
    </div>
</div>

    )
}