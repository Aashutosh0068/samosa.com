import React from 'react'
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsFillPersonFill, BsFillTelephoneFill, BsHeartFill } from 'react-icons/bs'
import {BiFoodMenu, BiLogIn} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  showCart=()=>{
    document.getElementById("cart").style="display:block"
  }
  render(){
  return (
    <>
    <nav id='nav' className="sticky bg-amber-400 h-54 py-4 px-6 shadow-lg flex justify-between items-center text-white">
      <div className="home font-bold text-xl">
        <NavLink to="/" className="p-2 px-3">
          Samosa Delight
        </NavLink>
      </div>
      <ul className="flex items-center font-semibold text-lg">
        <li className="mx-2">
          <NavLink to="/menu" className="hover:border-white border pr-2 border-transparent inline-flex rounded p-1 px-1.5 hover:border">
            <BiFoodMenu className='mt-1.5 mr-1.5 text-xl'/>
            <p className="mt-0.5">Menu</p>
          </NavLink>
        </li>
        <li className='mx-2'>
          <NavLink to="/about" className='hover:border-white pr-2 border-transparent inline-flex border rounded p-1 px-1.5 hover:border'>
            <BsFillPersonFill className='mt-1.5 mr-1.5 text-xl'/>
            <p className='mt-0.5'>About</p></NavLink>
        </li>
        <li className="mx-2">
          <NavLink to="/wishlist" className="hover:border-white border border-transparent pr-2 mt-0.5 inline-flex p-1 rounded px-1.5 hover:border">
            <BsHeartFill className='mr-1.5 mt-1.5 text-lg'/>
            Wishlist
          </NavLink>
        </li>
        <li className="mx-2 text-lg">
          <NavLink to="/contact" className="hover:border-white pr-2 border border-amber-400 mt-0.5 rounded inline-flex p-1 px-1.5 hover:border">
            <BsFillTelephoneFill className='mr-1.5 mt-1.5 text-lg'/>
            Contact Us
          </NavLink>
        </li>
        <li className="mx-2 inline-flex" onClick={this.showCart}>
              <RiShoppingCartFill className='text-3xl'/>
        </li>
        <li className="ml-4 text-lg">
          <NavLink to="/login" className="border-white pr-3 inline-flex border rounded p-1 px-2 hover:bg-white hover:text-amber-400 text-white">
            <BiLogIn className='mr-1 mt-1 text-xl'/>Login</NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
  }
}

export default Navbar