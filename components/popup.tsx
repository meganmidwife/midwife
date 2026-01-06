'use client'
import clsx from 'clsx'
import React, {useState} from 'react'
import { GrClose } from "react-icons/gr";
import { Lazy } from './Lazy';

export type popupProps ={
    videoId : string
} 
export const Popup = ({videoId}:popupProps) => {
   const [open, setOpen] = useState(false);
   const [play, setPlay] = useState(false);
   const url = play
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='border-b-2 border-slate-300 mb-4'>

    <div className={clsx("absolute z-50 inset-16 xs:inset-0 border border-white rounded-lg bg-slate-800", open?"block":"hidden")}>
        <div className='absolute z-50 right-10 top-10' onClick={()=>setOpen(!open)}><GrClose size={20} className='cursor'/></div>
        <Lazy
        rootMargin="1500px"
        className="relative h-screen overflow-hidden md:aspect-video md:h-auto items-center"
      >
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='mx-auto mt-20 m-12'
      ></iframe>
      <button onClick={() => setPlay(!play)} className='w-full border border-white/70 text-slate-300 bg-slate-800/70'>{play?"Stop":"Play"}</button>
      </Lazy>
    </div>
    <div className='w-full border-2 border-slate-300 p-6 text-center text-xl md:text-2xl font-bold cursor-pointer bg-slate-700 my-4' onClick={()=>setOpen(!open)}>Open</div>
    </div>
  )
}
