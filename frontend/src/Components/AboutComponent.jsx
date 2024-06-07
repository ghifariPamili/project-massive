
function AboutComponent() {
  return (
    <div className="bg-white-500 text-black mt-[20px]  flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Layanan Kami</h1>
        <p className="text-xl mb-6">Yang akan kamu dapatkan</p>
        <div className="flex justify-between">

        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-center items-between gap-[20px]">
            <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <img src="src/assets/nadya.png" alt="" className="" />
              <h2 className="text-2xl font-semibold mb-2">Nadya</h2>
              </div>
            <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-semibold mb-2">Terjangkau</h2>
              </div>
            <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-semibold mb-2">Keamanan</h2>
              </div>
            
          </div>
          <div className="flex justify-center items-between gap-[20px]">
            <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-semibold mb-2">Menambah Relasi</h2>
              </div>
            <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-semibold mb-2">Negoable</h2>
              </div>
            <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2 shadow-[5px_5px_13px_0_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-semibold mb-2">Negoable</h2>
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