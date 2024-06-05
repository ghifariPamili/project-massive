import React from 'react'

function ProfileComponent() {
  return (
    <div className="min-h-screen bg-cyan-50 p-4">
    <div className="bg-white p-8 rounded-r-lg shadow-md flex-1 border-2 border-black rounded-lg m-2">
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src="path-to-profile-image.jpg"
          alt="Profile"
          className="rounded-full w-24 h-24"
        />
        <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
        </button>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-center">Hai Rahmat Lil'alam...</h2>
    </div>
    <nav className="mt-8">
      <ul>
        <li className="flex items-center space-x-2 p-2 mt-2 hover:bg-blue-100 rounded">
          <a href="#" className="text-blue-800">Informasi Pribadi</a>
        </li>
        <li className="flex items-center space-x-2 p-2 mt-2 hover:bg-blue-100 rounded">
          <a href="#" className="text-blue-800">Masuk & Kata Sandi</a>
        </li>
        <li className="flex items-center space-x-2 p-2 mt-2 hover:bg-blue-100 rounded">
          <a href="#" className="text-blue-800">Keluar</a>
        </li>
      </ul>
    </nav>
  </div>

  <div className="bg-white p-8 rounded-r-lg shadow-md flex-1 border-2 border-black rounded-lg m-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Informasi Pribadi</h2>
        <button className="text-blue-500">
        </button>
      </div>
      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <label>
            <input type="radio" name="gender" value="male" className="mr-2" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" className="mr-2" />
            Female
          </label>
        </div>
        <div>
          <label className="block text-sm">Nama Depan</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="Rahmat" />
        </div>
        <div>
          <label className="block text-sm">Nama Belakang</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="Lil'amin" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm">Email</label>
          <div className="flex items-center mt-1">
            <input type="email" className="flex-1 border rounded py-2 px-3" value="rahmatanlilalamin@student.ub.ac.id" />
            <span className="ml-1">Verified</span>
          </div>
        </div>
        <div>
          <label className="block text-sm">Universitas</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="Brawijaya" />
        </div>
        <div>
          <label className="block text-sm">Program Studi</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="Sistem Informasi" />
        </div>
        <div>
          <label className="block text-sm">NIM</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="215080201111111" />
        </div>
        <div>
          <label className="block text-sm">Semester</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="6" />
        </div>
        <div>
          <label className="block text-sm">Angkatan</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="2021" />
        </div>
        <div>
          <label className="block text-sm">No. WhatsApp</label>
          <input type="text" className="mt-1 block w-full border rounded py-2 px-3" value="081234567890" />
        </div>
      </form>
    </div>
  </div>
  )
}

export default ProfileComponent