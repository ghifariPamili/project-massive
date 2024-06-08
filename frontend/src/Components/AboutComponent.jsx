
function AboutComponent() {
  return (
    <div className="bg-white-500 text-black mt-[20px]  flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">OUR TEAM</h1>
        <p className="text-xl mb-6">THE MAVERICK</p>
        <div className="flex justify-between">

        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-center items-between gap-[20px]">
            <div className="p-4 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Nadya.png" alt="" className="rounded-full" />
              <h2 className="text-2xl font-semibold mb-2">Nadya</h2>
              </div>
            <div className="p-4 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Nabilah.png" alt="" className="rounded-full"/>
              <h2 className="text-2xl font-semibold mb-2">Nabilah</h2>
              </div>
            <div className="p-4 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Siti.png" alt="" className="rounded-full"/>
              <h2 className="text-2xl font-semibold mb-2">Siti Aghnina</h2>
              </div>
            
          </div>
          <div className="flex justify-center items-between gap-[20px]">
            <div className="p-4 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Ghifari.png" alt="" className="rounded-full"/>
              <h2 className="text-2xl font-semibold mb-2">Ghifari</h2>
              </div>
            <div className="p-4 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Danta2.png" alt="" className="rounded-full"/>
              <h2 className="text-2xl font-semibold mb-2">Danta</h2>
              </div>
            <div className="p-4 bg-gray-500 bg-opacity-30 rounded-lg m-2 border-2 border-gray shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/Arif.png" alt="" className="rounded-full"/>
              <h2 className="text-2xl font-semibold mb-2">Arief</h2>
              </div>
          </div>
        </div>
        </div>
        <div className="text-center mt-6">
        </div>
      </div>
    </div>
  )
}

export default AboutComponent