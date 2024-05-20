import React from 'react'
import { HiArrowSmRight } from "react-icons/hi";

function Starter() {
  return (
    <div className='h-screen bg-cyan-50 flex items-center justify-center gap-[700px]'>
        <div className='flex flex-col items-start gap-4'> 
            <h1 className='text-[50px] font-medium'>Jastip Mama</h1>
            <p>Website transaksi jasa titip yang mudah, murah dan amanah</p>
            <div className="flex items-center justify-between gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-[150px]">
                <button className="flex-grow">Login</button>
                <div className='bg-white rounded-[20px] p-1'>
                    <HiArrowSmRight className="text-blue-500" />
                </div>
            </div>
        </div>
        <div>
            {/* Tambahkan ilustrasi Anda di sini */}
            <img src="path_to_your_image" alt="Ilustrasi" />
        </div>
    </div>
  )
}

export default Starter










// import React from 'react'
// import { HiArrowSmRight } from "react-icons/hi";

// function Starter() {
//   return (
//     <div className='h-screen bg-cyan-50 gap-20px flex items-center justify-center'>
//         <div>
//             <h1>Jastip Mama</h1>
//             <p>Website transaksi jasa titip yang mudah, murah dan amanaah</p>
//             <div className="flex items-center justify-space-between gap-20px bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                 <button >Login</button>
//                 <div className='bg-white rounded-[20px] w-225px'><HiArrowSmRight /></div>
//             </div>
//         </div>
//         <div>

//         </div>
//     </div>
//   )
// }

// export default Starter
