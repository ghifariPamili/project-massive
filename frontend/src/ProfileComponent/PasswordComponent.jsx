import React from 'react'

function PasswordComponent() {
  return (
    <div className="">
      <div className="flex justify-start items-start m-[3px] m-[10px] ">
        <div className="w-full p-[10px]  text-[14px] gap-[1px] flex flex-col  justify-start  items-start bg-white rounded-lg shadow-md">
          <div>
          <h2 className="text-2xl font-bold">Masuk</h2>
          <p className="mt-1">Gunakan akun Google mu</p>
          </div>
          <form className="my-2 " onSubmit="">
            <div className="mb-3">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
               
                onChange=""
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Kata sandi</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                  
                onChange=""
                required
              />
            </div>
            <div className="flex items-center mb-3">
              <input type="checkbox" id="show-password" className="mr-2" />
              <label htmlFor="show-password" className="text-gray-700">
                Tampilkan kata sandimu
              </label>
            </div>
            <h3 className="text-xl font-bold">Ubah kata sandi?</h3>
            <p className="mt-1">
              Pilih sandi yang kuat dan jangan gunakan lagi untuk akun lain.
            </p>
            <div className="mb-3">
              <label className="block text-gray-700">Sandi baru</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">
                Konfirmasi sandi baru
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                id="show-new-password"
                className="mr-2"
              />
              <label htmlFor="show-new-password" className="text-gray-700">
                Tampilkan kata sandimu
              </label>
            </div>
            <div className="mb-3">
              <p className="text-gray-700">
                Kekuatan sandi: Gunakan setidaknya 8 karakter. Jangan gunakan
                sandi dari situs lain atau sesuatu yang mudah ditebak,
                seperti nama hewan peliharaanmu.
              </p>
            </div>
            
          </form>
          <div className="flex w-full pb-[10px] justify-between items-center">
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
        </div>
      </div>
    </div>
  )
}

export default PasswordComponent