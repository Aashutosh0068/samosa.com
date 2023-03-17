import Loading from '@/components/Loading'
import userState from '@/values/userState'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Checkout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userStatus = userState().message
    if (userStatus !== 200) {
      window.location.replace('/auth/login')
    }
    else if (!localStorage.getItem('cartItems')) {
      window.location.replace('/menu')
      toast.warn('Foodie your cart is empty! explore samosas in menu',
        {
          autoClose: 5000,
          position: 'top-right',
          closeOnClick: false,
          closeButton: false,
          hideProgressBar: true,
          className: "mt-16"
        })
    }
    else {
      setLoading(null)
    }
  }, [loading])

  return (
    <>
      {
        loading ? (
          <div>
            <Loading />
          </div>) : (
          <div className='sign-container -mb-6'>
            <div>
              <div className="py-12">
                <div className="w-1/2 opacity-95 lg:mx-20 lg:my-16 bg-white shadow-lg rounded-lg md:max-w">
                  <div className="md:flex ">
                    <div className="w-full p-4 px-8 py-8">
                      <div className="flex flex-row">
                        <h2 className="text-3xl font-semibold">Samosa</h2>
                        <h2 className="text-3xl text-amber-400 font-semibold">Delight</h2>
                      </div>
                      <div className="flex flex-row text-md pt-6 pb-5">
                        <span className="font-bold">Information</span>
                        <mdall className="text-gray-400 ml-1"></mdall>
                        <span className="text-gray-400 ml-1">Payment</span>
                      </div>
                      <span>Customer Information</span>
                      <div className="relative pb-5">
                        <input type="text" name="mail" value={userState().email} className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="E-mail" />
                      </div>
                      <span>Shipping Address</span>
                      <div className="grid md:grid-cols-4 md:gap-4">
                        <input type="text" name="mail" value={userState().name.split(' ').slice(0, 1)} className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="First name" />
                        <input type="text" name="mail" value={userState().name.split(' ').slice(1, 2)} className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="Last name" />
                      </div>
                      <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="Address" />
                      <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="Apartment, suite, etc. (optional)" />
                      <div className="grid md:grid-cols-3 md:gap-4">
                        <input type="number" maxLength={6} minLength={6} name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="Zipcode" />
                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" readOnly placeholder="City" />
                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" readOnly placeholder="State" /> </div>
                      <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" value="India" readOnly placeholder="Country" />
                      <input type="number" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-4 mt-4 text-md" placeholder="Phone Number" />
                      <div className="flex justify-between items-center pt-4">
                        <a href="/menu" className="h-12 flex text-blue-500 -mb-3 mt-4 text-sm font-medium">Return to Menu</a>
                        <button type="button" className="h-12 w-48 rounded font-medium text-md bg-blue-500 text-white">Continue to Payment</button> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Checkout