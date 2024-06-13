import React, { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Makanan');

  const categories = [
    { name: 'Makanan', icon: 'src/assets/gambarfood.png' },
    { name: 'ATK', icon: 'src/assets/atk.png' },
    { name: 'Laundry', icon: 'src/assets/laundry.png' },
    { name: 'Obat', icon: 'src/assets/obat.png' },
    { name: 'Skincare', icon: 'src/assets/skincare.png' },
    { name: 'etc', icon: 'src/assets/etc.png' }
  ];

  const services = {
    Makanan: [
      { name: 'Ayam Geprek', price: 'Rp 3,000' },
      { name: 'Mie Gacoan', price: 'Rp 3,200' },
      { name: 'Cemilan', price: 'Rp 2,500' }
    ],
    ATK: [
      { name: 'Pensil', price: 'Rp 1,000' },
      { name: 'Buku Tulis', price: 'Rp 5,000' }
    ],
    Laundry: [
      { name: 'Cuci Kering', price: 'Rp 10,000' },
      { name: 'Cuci Setrika', price: 'Rp 15,000' }
    ],
    Obat: [
      { name: 'Paracetamol', price: 'Rp 2,000' },
      { name: 'Vitamin C', price: 'Rp 5,000' }
    ],
    Skincare: [
      { name: 'Moisturizer', price: 'Rp 50,000' },
      { name: 'Sunscreen', price: 'Rp 70,000' }
    ],
    etc: [
      { name: 'Lain-lain', price: 'Rp 10,000' }
    ]
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <Header />
      <CategoryIcons categories={categories} setSelectedCategory={setSelectedCategory} />
      <FeaturedServices services={services[selectedCategory]} />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-cyan-100 p-6 rounded-lg shadow-md text-center mb-6">
      <h1 className="text-2xl font-bold">Mager?</h1>
      <p>bukan masalahah, kami hadir membantu anda</p>
      <p className="mt-4 text-lg">Nitip mudah, murah dan terpercaya, yaa di Jastip MaMa</p>
      <p className="mt-2">Tunggu apalagi, yuk jastip sekarang di Jastip MaMa</p>
      <div className="mt-4 flex justify-between">
        <img src="src/assets/rocket.png" alt="Illustration" className="w-[200px] h-[160px] mr-4" />
        <img src="src/assets/jastip.png" alt="Clipboard" className="w-[200px] h-[160px]" />
      </div>
    </div>
  );
}

function CategoryIcons({ categories, setSelectedCategory }) {
  return (
    <div className="flex gap-[20px] mb-6">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <button onClick={() => setSelectedCategory(category.name)}>
            <img src={category.icon} alt={category.name} className="w-[70px] h-[70px] mb-2 rounded-full" />
          </button>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}

function FeaturedServices({ services }) {
  return (
    <div className="bg-cyan-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Jastip yang lagi ada ..</h2>
      <div className="flex justify-between items-center">
        <div className="w-[300px]">
          {services.map((service, index) => (
            <div key={index} className="bg-cyan-300 rounded-[20px] border-black border-[2px] flex justify-between mb-2">
              <p>{service.name}</p>
              <p>{service.price}</p>
            </div>
          ))}
        </div>
        <div className="w-[400px] h-[150px] bg-white rounded-[20px] border-black border-[2px] text-center">
          <p>Klik list jastip disamping untuk melihat detail jastip</p>
        </div>
      </div>
    </div>
  );
}

export default App;
