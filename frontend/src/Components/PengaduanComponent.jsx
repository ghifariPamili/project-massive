// import React from 'react'

function PengaduanComponent() {
  return (
    <div className="min-h-screen bg-blue-50 px-[40px] flex justify-center items-center">
      <form onSubmit="" className="bg-white p-6 rounded-lg shadow-md space-y-2">
        <h1 className="text-2xl font-extrabold mb-4">Formulir Pengaduan Penitip</h1>
        <p className=' '>Jika Anda mempunyai keluhan terhadap driver, silakan isi formulir keluhan driver di bawah ini. Anda dapat mengajukan pengaduan  menggunakan nomor transaksi jastip bersama driver yang telah dilakukan sebelumnya. Jika tidak ada nomor transaksi jastip yang tercatat, mohon berikan informasi pada pelat identitas driver (yaitu nomor pelat kendaraan driver dan nama driver). Anda dapat memberikan salinan tanda terima tarif jastip dengan driver jika tersedia melalui email, laman chat, atau bukti transaksi lainnya.</p>
          <p>Semua pengaduan yang diterima oleh JasTip MaMa akan dirujuk ke afiliasi JasTip MaMa di masing-masing kampus mitra untuk ditindaklanjuti.
          Untuk keadaan darurat, silakan hubungi 123 langsung.</p> <p>Silakan klik di sini untuk menemukan informasi kontak JasTip MaMa di masing-masing kampus mitra.</p>
        <div className='flex flex-row gap-[10px]'>
          <div className='kiri w-[48%]'>
            <div className="mb-4">
              <label className="block text-gray-700 text-[15px] font-semibold">Nama</label>
              <input
                type="text"
                name="name"
                
                onChange=""
                className="w-full p-1 border text-[14px] border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-[15px] font-semibold">Alamat email</label>
              <input
                type="email"
                name="email"
                
                onChange=""
                className="w-full p-1 text-[14px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
          </div>
          <div className='kanan w-[48%]'>
            <div className="mb-4">
              <label className="block text-gray-700 text-[15px] font-semibold">Tanggal kejadian</label>
              <input
                type="date"
                name="date"
                
                onChange=""
                className="w-full p-1 text-[14px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-[15px] font-semibold">Waktu kejadian</label>
              <input
                type="time"
                name="time"
                
                onChange=""
                className="w-full p-1 text-[14px] border border-gray-300 rounded mt-1"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4 text-[14px]">
          <label className="block text-gray-700">Lokasi</label>
          <input
            type="text"
            name="location"
            
            onChange=""
            className="w-full p-1 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4 text-[14px]">
          <label className="block text-gray-700">Jenis driver</label>
          <div className="flex items-center mt-1">
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="driverType"
                  
                  onChange=""
                  className="form-radio  w-[20px]"
                  required
                />
                Motor driver
              </label>
            </div>
            <label>
              <input
                type="radio"
                name="driverType"
                
                
                onChange=""
                className="form-radio w-[20px]"
                required
              />
              Mobil driver
            </label>
          </div>
        </div>
        <div className='flex justify-center'>
        <button type="submit" className=" w-[200px] bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PengaduanComponent;