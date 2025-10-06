"use client";

import { SlSocialGoogle } from "react-icons/sl";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Password } from "./password";
import Link from "next/link";

interface SignInData {
  id: number;
  title: string;
  desc: string;
  Inputsplaceholder: {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
  };
  button: string;
}

export default function FormClient({ data }: { data: SignInData }) {
  return (
    <form className="flex flex-col justify-center items-center gap-4 pt-3">
      <input
        placeholder={data.Inputsplaceholder.input1}
        type="email"
        required
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <Password />

      <button className="bg-blue-600 text-white rounded-full px-4 py-3 w-full font-bold">
        {data.button}
      </button>

      <a href="#" className="text-blue-500 hover:underline pt-2">
        {data.Inputsplaceholder.input3}
      </a>

      <p className="text-md">
        {data.Inputsplaceholder.input4}{" "}
        <Link href="/signUp" className="text-blue-500">
          {data.Inputsplaceholder.input5}
        </Link>
      </p>

      <div className="flex items-center gap-3 my-4 w-full">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <div className="flex gap-3 text-white">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-red-700 flex justify-center items-center"
        >
          <SlSocialGoogle />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-blue-600 flex justify-center items-center"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-cyan-300 flex justify-center items-center"
        >
          <FaTwitter />
        </a>
      </div>
    </form>
  );
}
