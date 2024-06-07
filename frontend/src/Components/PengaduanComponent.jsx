import React from 'react'

function PengaduanComponent() {
  return (
    <div className="min-h-screen bg-cyan-50 p-4">
    <div className="bg-white p-8 rounded-r-lg shadow-md flex-1 border-2 border-black rounded-lg m-2">
      <h1>Formulir Pengaduan Penitip</h1>
      <p>Jika Anda mempunyai keluhan terhadap driver, silakan isi formulir keluhan driver di bawah ini. Anda dapat mengajukan pengaduan  menggunakan nomor transaksi jastip bersama driver yang telah dilakukan sebelumnya. Jika tidak ada nomor transaksi jastip yang tercatat, mohon berikan informasi pada pelat identitas driver (yaitu nomor pelat kendaraan driver dan nama driver). Anda dapat memberikan salinan tanda terima tarif jastip dengan driver jika tersedia melalui email, laman chat, atau bukti transaksi lainnya.</p>
      <p>Semua pengaduan yang diterima oleh JasTip MaMa akan dirujuk ke afiliasi JasTip MaMa di masing-masing kampus mitra untuk ditindaklanjuti.</p>
      <p>Untuk keadaan darurat, silakan hubungi 123 langsung. Silakan klik di sini untuk menemukan informasi kontak JasTip MaMa di masing-masing kampus mitra.</p>
      <div>
        <h2>Bagian I: Data Pribadi</h2>
        <div>
          <label className="block text-sm">Nama</label>
          <input type="text" className="mt-1 block w-full border-2 border-black rounded-lg m-3 py-2 px-3" value="" />
          <label className="block text-sm">Alamat Email</label>
          <input type="text" className="mt-1 block w-full border-2 border-black rounded-lg m-3 py-2 px-3" value="" />
        </div>
        <div>
          <h2>Bagian II: Rincian Pengaduan (1)(2) (atau Rincian Saran)</h2>
        </div>
        <div>
        <label className="block text-sm">Tanggal Kejadian</label>
        <input type="text" className="mt-1 block w-full border-2 border-black rounded-lg m-3 py-2 px-3" value="" />
        <label className="block text-sm">Waktu Kejadian</label>
        <input type="text" className="mt-1 block w-full border-2 border-black rounded-lg m-3 py-2 px-3" value="" />
        <label className="block text-sm">Jenis Driver</label>
        <input type="text" className="mt-1 block w-full border-2 border-black rounded-lg m-3 py-2 px-3" value="" />
        <label className="block text-sm">Lokasi</label>
        <input type="text" className="mt-1 block w-full border-2 border-black rounded-lg m-3 py-2 px-3" value="" />
        </div>
      </div>
      

    </div>
    </div>
  )
}

export default PengaduanComponent