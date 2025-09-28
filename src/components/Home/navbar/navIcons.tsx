
'use client';


import { IoInformationCircleOutline } from "react-icons/io5"
import { IoSearchOutline } from "react-icons/io5";


export default function NavIcons() {
 
  const navIcons = {
    search:  IoSearchOutline,
    info: IoInformationCircleOutline,
  };

  return (
    <div >
       <ul className="flex space-x-4 list-none ">
 <li><a href="#" className="text-gray-700 font-bold text-xl"> <navIcons.info/> </a></li>
  <li><a href="#" className="text-gray-700 font-bold text-xl"> <navIcons.search/> </a> </li>
       </ul>
     
    </div>
  );
}
