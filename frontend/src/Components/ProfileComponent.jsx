import React from 'react'


function ProfileComponent() {
  return (
    <div className="min-h-screen bg-blue-50 flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="" // Replace with actual profile picture URL
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <h2 className="mt-4 text-lg font-semibold">Hai </h2>
          <nav className="mt-8 w-full">
            <ul>
              <li className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 12.121A5.001 5.001 0 0012 7h.041A5.001 5.001 0 0018 12.041V12a5 5 0 00-5-5h-.042A5.002 5.002 0 0012 5a5 5 0 00-6.879 7.121zM5 18v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 00-2-2H7a2 2 0 00-2 2z"></path></svg>
                <span>Informasi Pribadi</span>
              </li>
              <li className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 11V7a5 5 0 00-10 0v4M12 14v7m5-5a2 2 0 11-4 0 2 2 0 014 0zm-7 0a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <span>Masuk & Kata Sandi</span>
              </li>
              <li className="flex items-center p-2 mt-4 hover:bg-blue-100 rounded">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>Keluar</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="w-3/4 p-8">
        <h1 className="text-2xl font-semibold mb-4">Informasi Pribadi</h1>
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="male" checked={'male'} className="form-radio" readOnly />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="female" checked={'female'} className="form-radio" readOnly />
              <span>Female</span>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Depan</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Belakang</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="email"
                  defaultValue=""
                  className="block w-full pr-10 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  readOnly
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Universitas</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Program Studi</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">NIM</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Semester</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Angkatan</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">No. Whatsapp</label>
              <input
                type="text"
                defaultValue=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileComponent