import React from 'react'

function PengaduanComponent() {
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <form onSubmit="" className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold mb-4">Formulir Pengaduan Penitip</h1>
        <p>Jika Anda mempunyai keluhan terhadap driver, silakan isi formulir keluhan driver di bawah ini. Anda dapat mengajukan pengaduan  menggunakan nomor transaksi jastip bersama driver yang telah dilakukan sebelumnya. Jika tidak ada nomor transaksi jastip yang tercatat, mohon berikan informasi pada pelat identitas driver (yaitu nomor pelat kendaraan driver dan nama driver). Anda dapat memberikan salinan tanda terima tarif jastip dengan driver jika tersedia melalui email, laman chat, atau bukti transaksi lainnya.
          Semua pengaduan yang diterima oleh JasTip MaMa akan dirujuk ke afiliasi JasTip MaMa di masing-masing kampus mitra untuk ditindaklanjuti.
          Untuk keadaan darurat, silakan hubungi 123 langsung. Silakan klik di sini untuk menemukan informasi kontak JasTip MaMa di masing-masing kampus mitra.</p>
        <div className="mb-4">
          <label className="block text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            value=""
            onChange=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Alamat email</label>
          <input
            type="email"
            name="email"
            value=""
            onChange=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tanggal kejadian</label>
          <input
            type="date"
            name="date"
            value=""
            onChange=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Waktu kejadian</label>
          <input
            type="time"
            name="time"
            value=""
            onChange=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Jenis driver</label>
          <div className="flex items-center mt-1">
            <label className="mr-4">
              <input
                type="radio"
                name="driverType"
                value="Motor driver"
                checked={'Motor driver'}
                onChange=""
                className="form-radio"
                required
              />
              Motor driver
            </label>
            <label>
              <input
                type="radio"
                name="driverType"
                value="Mobil driver"
                checked={'Mobil driver'}
                onChange=""
                className="form-radio"
                required
              />
              Mobil driver
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Lokasi</label>
          <input
            type="text"
            name="location"
            value=""
            onChange=""
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
};

export default PengaduanComponent