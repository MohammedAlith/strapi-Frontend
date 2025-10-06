"use client";

import { useEffect, useState } from "react";
import { SlSocialGoogle } from "react-icons/sl";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Password } from "./password";
import Link from "next/link"

interface Inputs {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
}

interface SignUpData {
  title: string;
  desc: string;
  inputs: Inputs;
  button: string;
}

export default function Form() {
  const [data, setData] = useState<SignUpData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://strapi-backend-alhx.onrender.com/api/sign-up?populate=*"
      );
      const json = await res.json();
      const signUpData = json?.data;

      setData({
        title: signUpData?.title,
        desc: signUpData?.desc,
        inputs: signUpData?.inputs,
        button: signUpData?.button,
      });
    }

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow rounded-xl p-4 md:p-14 m-6 md:mb-0 flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-grey-900 text-2xl font-bold">{data.title}</h1>
          <p className="text-xl text-gray-500 text-start">{data.desc}</p>
        </div>

        <form className="flex flex-col justify-center items-center gap-4 pt-3">
          <input
            placeholder={data.inputs.input1}
            type="text"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full 
            focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            placeholder={data.inputs.input2}
            type="email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full 
            focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <Password />

          <input
            placeholder={data.inputs.input4}
            type="password"
            required
            className="border border-gray-300 rounded-md px-4 py-2 w-full 
            focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <button className="bg-blue-600 text-white rounded-full px-4 py-3 w-full font-bold">
            {data.button}
          </button>

          <a
            href="#"
            className="text-blue-500 active:underline hover:underline focus:underline pt-2"
          >
            Forgot Password?
          </a>

          <p className="text-md">
            {data.inputs.input5}{" "}
           <Link href="/signIn" className="text-blue-500">
          {data.inputs.input6}
        </Link>
          </p>

          <div className="flex items-center gap-3 my-4 w-full">
            <div className="flex-1 h-px bg-gray-300"></div>
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
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
