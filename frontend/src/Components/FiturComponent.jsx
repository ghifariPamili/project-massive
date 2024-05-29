import React from 'react'
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { TbUserQuestion } from "react-icons/tb";

function FiturComponent() {
  return (
    <div className="bg-white-500 text-black h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Fitur yang akan anda sukai</h1>
        <p className="text-xl mb-6">Kami mempunyai fitur-fitur yang bisa digunakan untuk melakukan jastip, khususnya ketika kamu ingin menjadi  driver atau penitip.   </p>
        <div className="flex justify-between">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white-100 bg-opacity-0 rounded-lg m-2">
            <div className='flex items-center justify-center'><IoChatbubblesOutline size= '10em' className='bg-blue-400 4-p bg-opacity-50 rounded-lg m-2'/></div>
            <h2 className="text-2xl font-semibold mb-2">Chatting</h2>
            <p className="text-lg">Fitur yang membantu Anda berdiskusi dan memastikan bahwa  Anda dan driver memiliki kesepahaman yang sama.</p>
          </div>
          <div className="p-4 bg-white bg-opacity-0 rounded-lg m-2">
            <div className='flex items-center justify-center'><IoLocationOutline size= '10em' className='bg-blue-400 4-p bg-opacity-50 rounded-lg m-2'/></div>
            <h2 className="text-2xl font-semibold mb-2">Tracking Lokasi Driver</h2>
            <p className="text-lg">Fitur yang membantu Anda untuk memantau proses pengiriman dengan lebih efektif dan aman.</p>
          </div>
          <div className="p-4 bg-white bg-opacity-0 rounded-lg m-2">
          <div className='flex items-center justify-center'><TbUserQuestion size= '10em' className='bg-blue-400 bg-opacity-50 rounded-lg m-2'/></div>
            <h2 className="text-2xl font-semibold mb-2">Pengaduan</h2>
            <p className="text-lg">Fitur  yang memungkinkan berbagi pengalaman dan solusi.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FiturComponent