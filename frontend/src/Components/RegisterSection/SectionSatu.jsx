
// import Ilustrasi from 'C:/Project/latihanMsib/latihan-reactComponent/coba-tailwind/frontend/src/assets/ilustasi2.png';
import { Link } from 'react-router-dom';

const SectionSatu = ({ goToSection }) => {
  return (
    <div className='Container text-blue-950 font-semibold flex overflow-hidden font'>
      <div className='Information h-screen w-[50%] bg-customCyan rounded-tr-[40px] '>
        <div className='InfoContainer size-[100%] flex flex-col items-center justify-start pt-[40px] gap-[40px] '>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[25px]'>Solusi Anti Mager buat Mahasiswa </p>
            <nav className='flex justify-between shadow-lg '>
              <a href="#"><div className='bg-colorPrimer w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
              <a href="#"><div className='bg-white w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
              <a href="#"><div className='bg-white w-[120px] shadow-lg h-[5px] rounded-full'></div></a>
            </nav>
          </div>
          <div className='ilustrasi'>
            <img src="" alt="Ilustration" className=' w-[400px]' />
          </div>
        </div>
        <div className="w-[421.23px] h-[512.45px] left-[-100.45px] top-[-431.42px] absolute origin-top-left rotate-[37.21deg] opacity-10 rounded-full border-8 border-blue-950" />
      </div>
      <div className='formIsi h-screen w-[50%] bg-white z-10'>
        <div className=' h-screen w-[100%] flex flex-col items-center justify-center gap-[70px] px-[40px] '>
          <div className='flex flex-col w-[100%]'>
            <h1 className='text-[40px] font-bold'>Bergabunglah dengan kami</h1>
            <p>Ingat Mahasiswa, Ingat JasTip MaMa.</p>
          </div>
          <div className='w-[100%]'>
            <div>Website keren dari mahasiswa buat mahasiswa, JasTip MaMa bikin hidup  kamu jadi gampang banget! Dengan Jastip MaMa, nitip barang jadi efisien  banget, semua info lokal yang kamu butuhin ada, keamanan data terjamin,  transaksi juga lancar jaya. Selain itu, kita juga bantu ningkatin  ekonomi lokal di Malang. Yuk, gabung sekarang dan rasain kemudahannya!</div>
          </div>
          <div className='flex flex-col gap-[10px] w-[100%] justify-center items-center'>
            <button onClick={goToSection} className='bg-colorSekunder w-[130px] h-[40px] rounded-full text-white'>Lanjut</button>
            <div className='flex flex-row gap-[5px]'>
              <p>Sudah punya akun?</p>
              <Link to="/login" className='text-colorSekunder'>Masuk</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionSatu;
