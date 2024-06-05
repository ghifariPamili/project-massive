import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul>
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">YouTube Playlist</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Install App</h3>
            <div className="flex flex-col space-y-2">
              <img src="src/assets/App Store.png" alt="" />
              <img src="src/assets/PlayStore.png" alt="" />
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-4 text-center md:text-left">
          <div className="flex justify-between items-center">
            <p className="text-sm">© Copyright 2024, All Rights Reserved by TheMaverick</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent