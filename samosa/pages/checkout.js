import Loading from '@/components/Loading'
import userState from '@/values/userState'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Checkout = () => {
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, [cartItems]);

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

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [Pincode, setPincode] = useState('')
  const [address, setaddress] = useState('')
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')

  return (
    <>
      {
        loading ? (
          <div>
            <Loading />
          </div>) : (
          <div className='-mb-6 justify-between bg-white'>
            <div>
              <div className="py-6 w-full flex bg-white">
                <div className=" opacity-95 mx-10 border lg:my-16 bg-white-50 shadow-xl rounded-lg max-w">
                  <div className="md:flex ">
                    <div className="w-full p-5 px-8 py-8">
                      <div className="flex flex-row font-serif">
                        <h2 className="text-3xl flex-row flex text-amber-400 font-bold">Samosa Delight</h2>
                      </div>
                      <div className="flex flex-row text-md pt-6 pb-5">
                        <span className="font-bold">Information</span>
                        <mdall className="text-gray-400 ml-1"></mdall>
                        <span className="text-gray-400 ml-1">Payment</span>
                      </div>
                      <span>Customer Information</span>
                      <div className="relative pb-5">
                        <input type="email" name="mail" value={Email} onChange={(e) => setEmail(e.target.value)} defaultValue={userState().email} className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" placeholder="E-mail" />
                      </div>
                      <span>Shipping Address</span>
                      <div className="grid md:grid-cols-2 md:gap-4">
                        <input type="text" value={Fname} onChange={(e) => setFname(e.target.value)} name="mail" defaultValue={userState().name.split(' ').slice(0, 1)} className="border rounded h-10 w-full focus:outline-none focus:border-amber-400 px-5 mt-5 text-md" placeholder="First name" />
                        <input type="text" value={Lname} onChange={(e) => setLname(e.target.value)} name="mail" defaultValue={userState().name.split(' ').slice(1, 2)} className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" placeholder="Last name" />
                      </div>
                      <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" placeholder="Address" />
                      <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" placeholder="Apartment, suite, etc. (optional)" />
                      <div className="grid md:grid-cols-3 md:gap-3">
                        <input type="number" maxLength={6} value={Pincode} onChange={(e) => setPincode(e.target.value)} minLength={6} oname="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" placeholder="Zipcode" />
                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" readOnly placeholder="City" />
                        <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" readOnly placeholder="State" /> </div>
                      <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" value="India" readOnly placeholder="Country" />
                      <input type="number" name="mail" className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md" placeholder="Phone Number" />
                      <div className="flex justify-between items-center mt-8 pt-5">
                        <a href="/menu" className="h-12 flex text-blue-500 -mb-3 mt-5 text-sm font-medium">Return to Menu</a>
                        <button type="button"
                          disabled={!address || !Email || !Fname || Pincode.toString().length != 6}
                          className="h-12 w-48 rounded font-medium disabled:bg-blue-400 text-md bg-blue-500 text-white">Continue to Payment</button> </div>
                    </div>
                  </div>
                </div>
                <div className="py-14 sm:w-2/4 pr-4"><h1 className="text-4xl font-bold font-serif">Your Samosas</h1>
                  <div className="overflow-y-auto mr-2 xs:hidden ml-6 mb-8 my-6">
                    {cartItems.map((item, index) => (
                      <div
                        className="flex items-center py-3 mb-2 border-b border-gray-300"
                        key={index}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-md mr-3 mb-5"
                        />
                        <div className="flex-grow mb-3.5 w-max ml-1">
                          <p
                            className="text-gray-800  font-semibold text-lg"
                          >
                            {item.name}
                          </p>
                          <p className=" text-yellow-500 font-semibold text-md">
                            INR {item.price}
                          </p>
                          <p className="text-md">
                            {item.description}
                          </p>
                          <p className="text-md font-semibold mt-4">Quantity  -  {item.quantity} pieces</p>
                        </div>
                      </div>
                    ))}
                    <span className="text-xl font-semibold mt-6">Total : <span className="text-black font-semibold"> ₹{cartTotal.toFixed(2)}</span></span>
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