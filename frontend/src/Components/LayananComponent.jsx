import { BiRun } from "react-icons/bi";
import { PiMoneyWavyFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiAdguard } from "react-icons/si";

function LayananComponent() {
  return (
    <div className="bg-white-500 text-black  flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Layanan Kami</h1>
        <p className="text-xl mb-6">Yang akan kamu dapatkan</p>
        <div className="flex justify-between">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2">
          <div className="flex items-center justify-center"><BiRun size="5em" /></div>
            <h2 className="text-2xl font-semibold mb-2">Kemudahan</h2>
            <p className="text-lg">Hanya dengan beberapa klik, kamu bisa mengirim atau menerima barang tanpa ribet.</p>
          </div>
          <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2">
          <div className="flex items-center justify-center"><PiMoneyWavyFill size="5em"/></div>
            <h2 className="text-2xl font-semibold mb-2">Terjangkau</h2>
            <p className="text-lg">Nikmati layanan terbaik dengan harga  yang bersahabat!</p>
          </div>
          <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2">
          <div className="flex items-center justify-center"><GiReceiveMoney size='5em'/></div>
            <h2 className="text-2xl font-semibold mb-2">Negoable</h2>
            <p className="text-lg">Kamu bisa bernegosiasi harga secara langsung dengan penyedia  jasa dan mendapatkan layanan terbaik dengan harga yang sesuai  dengan budgetmu.</p>
          </div>
          <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2">
          <div className="flex items-center justify-center"><LiaUserFriendsSolid size='5em'/></div>
            <h2 className="text-2xl font-semibold mb-2">Menambah Relasi</h2>
            <p className="text-lg">Berinteraksi dengan sesama mahasiswa yang menawarkan dan membutuhkan  jasa titip-menitip bisa menambah relasi dan memperkaya pengalamanmu  selama di kampus.</p>
          </div>
          <div className="p-4 bg-cyan-500 bg-opacity-30 rounded-lg m-2">
          <div className="flex items-center justify-center"><SiAdguard size='5em'/></div>
            <h2 className="text-2xl font-semibold mb-2">Keamanan</h2>
            <p className="text-lg">Setiap penyedia jasa terverifikasi sehingga kamu bisa menggunakan layanan kami dengan tenang.</p>
          </div>
        </div>
        </div>
        <div className="text-center mt-6">
        </div>
      </div>
    </div>
  )
}

export default LayananComponent