import Loading from "@/components/Loading";
import userState from "@/values/userState";
import pincode from "@/values/pincode.json";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [Payment, setPayment] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, [cartItems]);

  useEffect(() => {
    const userStatus = userState().message;
    if (userStatus !== 200) {
      window.location.replace("/auth/login");
    } else if (!localStorage.getItem("cartItems")) {
      window.location.replace("/menu");
      toast.warn("Foodie your cart is empty! explore samosas in menu", {
        autoClose: 5000,
        position: "top-right",
        closeOnClick: false,
        closeButton: false,
        hideProgressBar: true,
        className: "mt-16",
      });
    } else {
      setLoading(null);
    }
  }, [loading]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [Pincode, setPincode] = useState("");
  const [address, setaddress] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    setAmount(cartTotal.toFixed(2));
    try {
      const res = await fetch("/api/createorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          alt_email: userState().email,
          pincode: Pincode,
          phone: Phone,
          name: Fname + " " + Lname,
          address: address,
          payment_type: Payment,
          amount: amount,
          products: JSON.parse(localStorage.getItem("cartItems")).map(
            (value) => {
              return {
                name: value.name,
                quantity: value.quantity,
              };
            }
          ),
        }),
      });

      const statusCode = await res.status;
      const json = await res.json();

      if (statusCode == 200) {
        toast.success(json.message, {
          autoClose: 5000,
          position: "top-right",
          closeOnClick: false,
          closeButton: false,
          hideProgressBar: true,
          className: "mt-16",
        });
        window.location.replace(`/orders/${json.orderId}`)
      }

      else if(statusCode == 500){
        toast.warn(json.message, {
          autoClose: 5000,
          position: "top-right",
          closeOnClick: false,
          closeButton: false,
          hideProgressBar: true,
          className: "mt-16",
        });
      }

      else{
        toast.error(json.message, {
          autoClose: 5000,
          position: "top-right",
          closeOnClick: false,
          closeButton: false,
          hideProgressBar: true,
          className: "mt-16",
        });
      }

    } catch {
      (err) => err;
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="-mb-6 justify-between bg-white">
          <div>
            <div className="py-6 w-full flex bg-white">
              <div className=" opacity-95 mx-10 border lg:my-16 bg-white-50 shadow-xl rounded-lg max-w">
                <div className="md:flex ">
                  <div className="w-full p-5 px-8 py-8">
                    <div className="flex flex-row font-serif">
                      <h2 className="text-3xl flex-row flex text-amber-400 font-bold">
                        Samosa Delight
                      </h2>
                    </div>
                    <h3 class="mb-4 font-semibold mt-4 text-gray-900 dark:text-white">
                      Payment Method
                    </h3>
                    <ul class="items-center w-full mb-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {/*<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-list-radio-license"
                            type="radio"
                            value=""
                            name="list-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-list-radio-license"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Driver License{" "}
                          </label>
                        </div>
      </li>*/}
                      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-list-radio-id"
                            type="radio"
                            onChange={(e) => {
                              const val = e.target.checked;
                              if (val == true) {
                                setPayment("cash on delivery");
                              }
                            }}
                            name="list-radio"
                            class="w-4 h-4 text-amber-400 bg-gray-100 border-gray-300 focus:ring-amber-400 dark:focus:ring-amber-400 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-list-radio-id"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Cash on Delivery
                          </label>
                        </div>
                      </li>
                      <li class="w-full dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <input
                            id="horizontal-list-radio-passport"
                            type="radio"
                            onChange={(e) => {
                              const val = e.target.checked;
                              if (val == true) {
                                setPayment("prepaid Payment");
                              }
                            }}
                            name="list-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="horizontal-list-radio-passport"
                            class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            UPI / Debit Card
                          </label>
                        </div>
                      </li>
                    </ul>

                    <span>Customer Information</span>
                    <div className="relative pb-5">
                      <input
                        type="email"
                        name="mail"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue={userState().email}
                        className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                        placeholder="E-mail"
                      />
                    </div>
                    <span>Shipping Address</span>
                    <div className="grid md:grid-cols-2 md:gap-4">
                      <input
                        type="text"
                        value={Fname}
                        onChange={(e) => setFname(e.target.value)}
                        name="mail"
                        defaultValue={userState().name.split(" ").slice(0, 1)}
                        className="border rounded h-10 w-full focus:outline-none focus:border-amber-400 px-5 mt-5 text-md"
                        placeholder="First name"
                      />
                      <input
                        type="text"
                        value={Lname}
                        onChange={(e) => setLname(e.target.value)}
                        name="mail"
                        defaultValue={userState().name.split(" ").slice(1, 2)}
                        className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                        placeholder="Last name"
                      />
                    </div>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      name="mail"
                      className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                      placeholder="Address"
                    />
                    <input
                      type="text"
                      name="mail"
                      className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                    <div className="grid md:flex md:gap-3">
                      <input
                        type="number"
                        maxLength={6}
                        value={Pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        minLength={6}
                        oname="mail"
                        className="border rounded h-10 w-2/3 focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                        placeholder="Zipcode"
                      />
                      <input
                        type="text"
                        name="mail"
                        className="border rounded h-10 w-3/4 uppercase focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                        readOnly
                        value={
                          Object.keys(pincode).includes(Pincode)
                            ? pincode[Pincode].slice(0, 1)
                            : ""
                        }
                        placeholder="City"
                      />
                      <input
                        type="text"
                        name="mail"
                        className="border rounded h-10 w-full uppercase focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                        readOnly
                        placeholder="State"
                        value={
                          Object.keys(pincode).includes(Pincode)
                            ? pincode[Pincode].slice(1, 2)
                            : ""
                        }
                      />
                    </div>
                    <input
                      type="text"
                      name="mail"
                      className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                      value="India"
                      readOnly
                      placeholder="Country"
                    />
                    <input
                      type="number"
                      name="mail"
                      value={Phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border rounded h-10 w-full focus:outline-none  focus:border-amber-400 px-5 mt-5 text-md"
                      placeholder="Phone Number"
                    />
                    <div className="flex justify-between items-center mt-8 pt-5">
                      <a
                        href="/menu"
                        className="h-12 flex text-blue-500 -mb-3 mt-5 text-sm font-medium"
                      >
                        Return to Menu
                      </a>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={
                          !address ||
                          !Email.includes("@") ||
                          !Fname ||
                          !Lname ||
                          Pincode.toString().length != 6 ||
                          Phone.toString().length != 10 ||
                          !Payment
                        }
                        className="h-12 w-48 rounded font-medium disabled:bg-blue-300 text-md bg-blue-500 text-white"
                      >
                        Continue to Payment
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-14 sm:w-2/4 pr-4">
                <h1 className="text-4xl font-bold font-serif">Your Samosas</h1>
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
                        <p className="text-gray-800  font-semibold text-lg">
                          {item.name}
                        </p>
                        <p className=" text-yellow-500 font-semibold text-md">
                          INR {item.price}
                        </p>
                        <p className="text-md">{item.description}</p>
                        <p className="text-md font-semibold mt-4">
                          Quantity - {item.quantity} pieces
                        </p>
                      </div>
                    </div>
                  ))}
                  <span className="text-xl font-semibold mt-6">
                    Total :{" "}
                    <span className="text-black font-semibold">
                      {" "}
                      ₹{cartTotal.toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
