import React from 'react'

function SaldoComponent() {
  return (
    <div><div className="w-3/4 p-4 ml-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold">Pembayaran</h2>
    <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">BIAYA ADMIN JASTIP MAMA YANG TERSEDIA</h3>
      <p className="text-4xl font-bold text-blue-500">Rp47.850,00</p>
    </div>
    <h3 className="text-lg font-bold">Pilih metode pembayaran</h3>
    <button onClick="" className="flex items-center mt-2 text-blue-500">
      <span className="material-icons">add_circle</span>
      <span className="ml-2">Tambahkan Metode Pembayaran</span>
    </button>
    <p className="text-gray-600 mt-2">
      Metode pembayaran akan diverifikasi dengan jumlah Rp10.000, jumlah ini akan segera dibatalkan/dikembalikan dan kamu tidak akan dikenakan biaya apapun.
    </p>
    <h3 className="text-lg font-bold mt-4">Metode Penambahan Alternatif</h3>
    <ul className="mt-2">
      <li className="flex items-center mb-2">
        <span className="material-icons">account_balance_wallet</span>
        <span className="ml-2">ShopeePay</span>
      </li>
      <li className="flex items-center mb-2">
        <span className="material-icons">account_balance_wallet</span>
        <span className="ml-2">Dana</span>
      </li>
      <li className="flex items-center mb-2">
        <span className="material-icons">qr_code_scanner</span>
        <span className="ml-2">QRIS</span>
      </li>
    </ul>
    <div className="mt-4">
      {(  (
        <div key="" className="mb-2 p-2 bg-gray-100 rounded-lg">
          <p>Metode: </p>
          <p>Jumlah: Rp</p>
          <p>Status: </p>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default SaldoComponent