
function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo192.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">Nama Perusahaan</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Tentang Kami</a>
          <a href="#" className="hover:text-gray-400">Layanan</a>
          <a href="#" className="hover:text-gray-400">Kontak</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2a4 4 0 00-4 4v2H6a2 2 0 00-2 2v6a2 2 0 002 2h8v2a4 4 0 004 4h4a4 4 0 004-4V6a4 4 0 00-4-4h-4z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h8m-6-8h6M4 12h.01M4 16h.01M4 8h.01M4 4h.01M4 20h.01" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent