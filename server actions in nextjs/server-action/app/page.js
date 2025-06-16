"use client"
import Image from "next/image";
// import fs from "fs/promises"
import { submitaction } from "./action/submitaction";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-full max-w-[600px] mx-auto p-5">
      <form ref = {ref} action={(e)=>{submitaction(e);ref.current.reset()}}>
        <div className="flex flex-col gap-3 justify-evenly align-middle">
        <div>
          <label htmlFor="username">enter your name : </label>
          <input type="text" name  = "username" className="text-white"/>
        </div>
        <div>
          <label htmlFor="address">enter your address : </label>
          <input type="text" name  = "address" className="text-white "/>
        </div>
        <div className="flex m-auto w-full">
          <button type="submit" className="bordeer border-white">submit</button>
        </div>
        </div>
      </form>
    </div>
  );
}
