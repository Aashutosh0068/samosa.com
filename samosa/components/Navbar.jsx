import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { RiShoppingCartFill } from 'react-icons/ri';
import { BsFillPersonFill, BsFillTelephoneFill, BsHeartFill } from 'react-icons/bs'
import { BiFoodMenu, BiLogIn, BiLogOut, BiUserCircle } from 'react-icons/bi'
import userState from '@/values/userState';
import { toast } from 'react-toastify';

const Navbar = () => {

  function showCart() {
    document.getElementById("cart").style = "display:block"
  }

  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('User')

  useEffect(() => {
    let message = userState()
    if (message.message === 200) {
      setUser(true)
      setUserName(message.name)
    }
    else if(message.message === 690){
      toast.warn('Foodie not found ! session expired login again',
                    {
                        autoClose: 5000,
                        position: 'top-right',
                        closeOnClick: false,
                        closeButton: false,
                        hideProgressBar: true,
                        className: "mt-16"
                    })
      setUser(null)
      localStorage.removeItem('token')
    }
    else {
      setUser(null)
    }
  })

  return (
    <div id='navbar'>
      <nav className="sticky text-amber-400 shadow-xs h-16 py-4 px-6 flex justify-between items-center bg-white">
        <div className="font-bold text-xl">
          <Link href="/">
            Samosa Delivery
          </Link>
        </div>
        <ul className="flex items-center font-medium text-lg">
          <li className="mx-2">
            <Link href="/menu" className="hover:border-amber-400 border pr-2 border-transparent inline-flex rounded p-1 px-1.5 hover:border">
              <BiFoodMenu className='mt-1.5 mr-1.5 text-xl' />
              <p className="mt-0.5">Menu</p>
            </Link>
          </li>
          <li className='mx-2'>
            <Link href="/about" className='hover:border-amber-400 pr-2 border-transparent inline-flex border rounded p-1 px-1.5 hover:border'>
              <BsFillPersonFill className='mt-1.5 mr-1.5 text-xl' />
              <p className='mt-0.5'>About</p></Link>
          </li>
          <li className="mx-2">
            <Link href="/wishlist" className="hover:border-amber-400 border border-transparent pr-2 mt-0.5 inline-flex p-1 rounded px-1.5 hover:border">
              <BsHeartFill className='mr-1.5 mt-1.5 text-lg' />
              Wishlist
            </Link>
          </li>
          <li className="mx-2 text-lg">
            <Link href="/contact" className="hover:border-amber-400 pr-2 border border-transparent mt-0.5 rounded inline-flex p-1 px-1.5 hover:border">
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
                        className="flex peer items-center text-md mt-1 -ml-1 mr-4 text-amber-400 transition duration-150 ease-in-out"
                        aria-expanded="false">
                        <BiUserCircle className='text-2xl mr-1.5' />{userName.split(' ').slice(0, 1)}
                      </button>
                      <ul
                        className="fixed hover:block peer-hover:block hidden z-[1000] mt-2 min-w-max object-contain bg-contain list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700">
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="/auth/orderhistory"
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
                <Link href="/auth/signup" className="border-amber-400 -ml-1 mr-4 pr-3 inline-flex border rounded p-1 px-2 hover:bg-amber-400 hover:text-white text-amber-400">
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