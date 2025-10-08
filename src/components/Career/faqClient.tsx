"use client"
import { useState,useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  id: number;
  ques: string;
  ans: string;
}

interface FAQClientProps {
  list: FAQItem[];
}

export default function FAQClient({ list }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const[loading, setLoading]=useState(true);

 

  useEffect(() => {
    setLoading(false); 
  }, []);

  if(loading){ 
     
    return<p className="flex items-center w-full text-3xl text-blue-500">Loading</p>
 }
 

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    !loading&&(
    <div className="flex flex-col gap-3 w-full p-4">
      {list.map((item, index) => (
        <div
          key={item.id}
          className="bg-white flex flex-col shadow-lg p-5 rounded-md text-lg gap-3"
        >
          <div className="flex gap-3 text-blue-500 items-center">
            <button onClick={() => toggle(index)}>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <h1>{item.ques}</h1>
          </div>
          <div className="ps-8">
            {openIndex === index && (
              <p className="text-gray-500 whitespace-pre-line">{item.ans}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    )
  );
}
