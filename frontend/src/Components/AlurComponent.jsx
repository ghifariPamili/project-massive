import { MdOutlineComputer } from "react-icons/md";
import { GrCursor } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { BiLoaderCircle } from "react-icons/bi";
import { BsBodyText } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { BsFileText } from "react-icons/bs";

function AlurComponent() {
  return (
    <div className="bg-cyan-500 text-black h-screen flex items-center justify-center">
    <div className="text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Alur Proses</h1>
      <div className="">
        <div className="flex justify-center gap-1">
      <button className="flex items-center gap-2 bg-blue-950 text-white px-8 py-[13px] rounded-full font-semibold">Sebagai penitip</button>
      <button className="flex items-center gap-2 bg-white text-black px-8 py-[13px] rounded-full font-semibold">Sebagai driver</button>
      </div>
      </div>
      <div className="flex justify-between">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <MdOutlineComputer />
        <p className="text-lg">Buka jastip mama</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <GrCursor />
        <p className="text-lg">pilih kategori jastip</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <CiLocationOn />
        <p className="text-lg">Masukkan lokasi pengiriman jastip.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <GrCursor />
        <p className="text-lg">Pilih jastip yang kamu inginkan berdasarkan list yang tersedia.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <BiLoaderCircle />
        <p className="text-lg">Tunggu konfirmasi transaksi dari driver.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <BsBodyText />
        <p className="text-lg">Lanjutkan detail pemesanan & nego harga di chat.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <MdPayment />
        <p className="text-lg">Tentukan cara pembayaranmu.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-100 rounded-lg m-2">
        <BsFileText />
        <p className="text-lg">Konfirmasi & tunggu titipanmu diantar.</p>
        </div>
      </div>
      </div>
      <div className="text-center mt-6">
      </div>
    </div>
  </div>
  )
  
}


export default AlurComponent