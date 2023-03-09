import React from 'react'
import {FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer'>
    <footer className="bg-gray-700 mt-6 text-white">
      <div className="container mx-auto py-8 px-4 justify-between flex">
        <div className="flex">
          <div className="w-full md:w-1/4 md:mr-4 lg:mr-4 lg:w-1/4 mb-8">
            <h2 className="font-bold text-lg mb-4">About Us</h2>
            <p className="text-white leading-loose">
              We are a samosa delivery service that delivers freshly made, hot and crispy samosas straight to your door.
            </p>
          </div>
          <div className="w-full md:w-1/4 md:-mr-4 lg:w-1/4 lg:-mr-4 mb-8">
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            <ul className="list-reset">
              <li className="mt-2"><a href="#" className="text-white hover:text-white">Home</a></li>
              <li className="mt-2"><a href="#" className="text-white hover:text-white">Menu</a></li>
              <li className="mt-2"><a href="#" className="text-white hover:text-white">About Us</a></li>
              <li className="mt-2"><a href="#" className="text-white hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 mb-8">
            <h2 className="font-bold text-lg mb-4">Contact Us</h2>
            <p className="text-white leading-loose w-40 inline-flex">
              <FaMapMarkerAlt className="mr-2 mt-2 text-xl"/>123 Main Street, Anytown USA
            </p>
            <div className="inline-flex">
            <span className="mr-2 mt-2"><FaPhoneAlt/></span>
            <p className="text-white leading-loose inline-flex">
               +1 555-555-5555
            </p>
            </div>
            <div className="inline-flex">
              <span className="mr-2 mt-2  text-lg"><FaEnvelope/></span>
            <p className="text-white leading-loose">
              info@samosadelivery.com
            </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 mb-8">
            <h2 className="font-bold text-lg mb-4">Follow Us</h2>
            <ul className="list-reset">
              <li className="inline-block mr-4"><a href="#" className="text-white text-2xl hover:text-white"><span className="fa fa-facebook"><FaFacebook/></span></a></li>
              <li className="inline-block mr-4"><a href="#" className="text-white text-2xl hover:text-white"><span className="fa fa-twitter"><FaTwitter/></span></a></li>
              <li className="inline-block mr-4"><a className="text-white text-2xl hover:text-white"><FaInstagram></FaInstagram></a></li>
              </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-sm">&copy; 2023 Samosa Delivery. All rights reserved.</p>
        </div>
      </div>
      </footer>
      </div>
  )
}

export default Footer