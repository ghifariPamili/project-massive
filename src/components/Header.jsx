import React from 'react'
import Logo from '../assets/Logo.png'

function Header() {
    return(
        <div className="bg-cyan-300 h-16 flex items-center justify-center px-4">
            <div className='flex justify-center '>
                <img src= { Logo } alt="#" className='size-[200px] items-center' />
            </div>
        </div>
    )
}



















// function Header() {
//   return (
//     <div className='bg-cyan-200 h-16 flex items-center justify-between px-4'>
//       <div className="flex items-center">
//         <a href="#" className='text-[25px] font-medium'>JastipMama.</a>
//         {/* <img src={Logo} alt="Logo" className="size-[200px] items-center" /> */}
//       </div>
//       <div className="flex items-center space-x-4">
//         <a href="#" className="text-gray-800 hover:text-gray-900">Home</a>
//         <a href="#" className="text-gray-800 hover:text-gray-900">Menu 2</a>
//         <a href="#" className="text-gray-800 hover:text-gray-900">Menu 3</a>
//         <a href="#" className="text-gray-800 hover:text-gray-900">Panduan</a>
//       </div>
//       <div>
//         <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Login</button>
//       </div>
//     </div>
//   )
// }

export default Header
