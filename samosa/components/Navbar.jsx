import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsFillPersonFill, BsFillTelephoneFill, BsHeartFill } from 'react-icons/bs'
import { BiFoodMenu, BiLogIn, BiLogOut, BiUserCircle } from 'react-icons/bi'
import userState from '@/values/userState';

const Navbar = () => {

  function showCart() {
    document.getElementById("cart").style = "display:block"
  }

  const [user, setUser] = useState(null)

  useEffect(() => {
    let message = userState().message
    if (message === 200) {
      setUser(true)
    }
    else {
      setUser(null)
    }
  })

  return (
    <div id='navbar'>
      <nav className="sticky bg-amber-400 h-54 py-4 px-6 shadow-lg flex justify-between items-center text-white">
        <div className="font-bold text-xl">
          <Link href="/">
            Samosa Delivery
          </Link>
        </div>
        <ul className="flex items-center font-semibold text-lg">
          <li className="mx-2">
            <Link href="/menu" className="hover:border-white border pr-2 border-transparent inline-flex rounded p-1 px-1.5 hover:border">
              <BiFoodMenu className='mt-1.5 mr-1.5 text-xl' />
              <p className="mt-0.5">Menu</p>
            </Link>
          </li>
          <li className='mx-2'>
            <Link href="/about" className='hover:border-white pr-2 border-transparent inline-flex border rounded p-1 px-1.5 hover:border'>
              <BsFillPersonFill className='mt-1.5 mr-1.5 text-xl' />
              <p className='mt-0.5'>About</p></Link>
          </li>
          <li className="mx-2">
            <Link href="/wishlist" className="hover:border-white border border-transparent pr-2 mt-0.5 inline-flex p-1 rounded px-1.5 hover:border">
              <BsHeartFill className='mr-1.5 mt-1.5 text-lg' />
              Wishlist
            </Link>
          </li>
          <li className="mx-2 text-lg">
            <Link href="/contact" className="hover:border-white pr-2 border border-amber-400 mt-0.5 rounded inline-flex p-1 px-1.5 hover:border">
              <BsFillTelephoneFill className='mr-1.5 mt-1.5 text-lg' />
              Contact Us
            </Link>
          </li>
          <li className="ml-4 text-lg">
            {
              user ? (
                <div className="flex justify-center">
                  <div>
                    <div className="relative">
                      <button
                        className="flex peer items-center text-md mt-1 -ml-1 mr-4 text-white transition duration-150 ease-in-out"
                        aria-expanded="false">
                        <BiUserCircle className='text-2xl mr-1.5' />User
                      </button>
                      <ul
                        className="absolute hover:block peer-hover:block hidden z-[1000] mt-2 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700">
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                          >Orders</a
                          >
                        </li>
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                          >My Account</a
                          >
                        </li>
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            onClick={() => localStorage.removeItem('token') & setUser(null) & window.location.reload()}
                          >Logout</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/auth/signup" className="border-white -ml-1 mr-4 pr-3 inline-flex border rounded p-1 px-2 hover:bg-white hover:text-amber-400 text-white">
                  <BiLogIn className='mr-1 mt-1 text-xl' />
                  Signup
                </Link>
              )
            }
          </li>
          <li className="mx-2 inline-flex" onClick={showCart}>
            <RiShoppingCartFill className='text-3xl' />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar