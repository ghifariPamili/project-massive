import React from 'react'

function PasswordComponent() {
  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <div className="flex">
        <div className="w-3/4 p-4 ml-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Masuk</h2>
          <p className="mt-1">Gunakan akun Google kampusmu</p>
          <form className="mt-4" onSubmit="">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                value=""
                onChange=""
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Kata sandi</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                value=""
                onChange=""
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="show-password" className="mr-2" />
              <label htmlFor="show-password" className="text-gray-700">
                Tampilkan kata sandimu
              </label>
            </div>
            <h3 className="text-xl font-bold">Ubah kata sandi?</h3>
            <p className="mt-1">
              Pilih sandi yang kuat dan jangan gunakan lagi untuk akun lain.
            </p>
            <div className="mb-4">
              <label className="block text-gray-700">Sandi baru</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Konfirmasi sandi baru
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="show-new-password"
                className="mr-2"
              />
              <label htmlFor="show-new-password" className="text-gray-700">
                Tampilkan kata sandimu
              </label>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                Kekuatan sandi: Gunakan setidaknya 8 karakter. Jangan gunakan
                sandi dari situs lain atau sesuatu yang mudah ditebak,
                seperti nama hewan peliharaanmu.
              </p>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Buang Perubahan
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PasswordComponent