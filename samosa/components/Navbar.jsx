import React from 'react'
import Link from 'next/link';
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsFillPersonFill, BsFillTelephoneFill, BsHeartFill } from 'react-icons/bs'
import {BiFoodMenu, BiLogIn} from 'react-icons/bi'

class Navbar extends React.Component {
  showCart=()=>{
    document.getElementById("cart").style="display:block"
  }
  render(){
  return (
    <>
    <nav id='nav' className="sticky bg-amber-400 h-54 py-4 px-6 shadow-lg flex justify-between items-center text-white">
      <div className="font-bold text-xl">
        <Link href="/">
          Samosa Delivery
        </Link>
      </div>
      <ul className="flex items-center font-semibold text-lg">
        <li className="mx-2">
          <Link href="/menu" className="hover:border-white border pr-2 border-transparent inline-flex rounded p-1 px-1.5 hover:border">
            <BiFoodMenu className='mt-1.5 mr-1.5 text-xl'/>
            <p className="mt-0.5">Menu</p>
          </Link>
        </li>
        <li className='mx-2'>
          <Link href="/about" className='hover:border-white pr-2 border-transparent inline-flex border rounded p-1 px-1.5 hover:border'>
            <BsFillPersonFill className='mt-1.5 mr-1.5 text-xl'/>
            <p className='mt-0.5'>About</p></Link>
        </li>
        <li className="mx-2">
          <Link href="/wishlist" className="hover:border-white border border-transparent pr-2 mt-0.5 inline-flex p-1 rounded px-1.5 hover:border">
            <BsHeartFill className='mr-1.5 mt-1.5 text-lg'/>
            Wishlist
          </Link>
        </li>
        <li className="mx-2 text-lg">
          <Link href="/contact" className="hover:border-white pr-2 border border-amber-400 mt-0.5 rounded inline-flex p-1 px-1.5 hover:border">
            <BsFillTelephoneFill className='mr-1.5 mt-1.5 text-lg'/>
            Contact Us
          </Link>
        </li>
        <li className="mx-2 inline-flex" onClick={this.showCart}>
              <RiShoppingCartFill className='text-3xl'/>
        </li>
        <li className="ml-4 text-lg">
          <Link href="/login" className="border-white pr-3 inline-flex border rounded p-1 px-2 hover:bg-white hover:text-amber-400 text-white">
            <BiLogIn className='mr-1 mt-1 text-xl'/>Login</Link>
        </li>
      </ul>
    </nav>
    </>
  )
  }
}

export default Navbar