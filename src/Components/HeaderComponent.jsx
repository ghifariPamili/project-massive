import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="header-nav flex items-center justify-between w-full p-4 bg-gray-800 text-white">
      <div className="logo text-2xl font-bold">Logo</div>
      <div className='flex justify-between'>
        <button className="mx-2 px-4 py-2 rounded text-white bg-transparent ">
            Home
        </button>
        <button className="mx-2 px-4 py-2 rounded text-white bg-transparent ">
            About
        </button>
        <button className="mx-2 px-4 py-2 rounded text-white bg-transparent ">
            Contact
        </button>
      </div>
      <div className="nav-buttons">
        <button className="mx-2 px-4 py-2 rounded bg-blue-500 text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
