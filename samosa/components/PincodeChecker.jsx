import React, { useState } from 'react'
import data from '@/values/pincode.json'

const PincodeChecker = () => {

    const [city, setCity] = useState("Pin Code")
    const [pincode, setPincode] = useState('')

    const handleSubmit = () => {
        if(pincode.length != 6){
            setCity("Invalid Pin Code")
        }
        else{
            setCity("Pin Code")
        }
    }

    return (
        <div className='mb-6'>
            <div className="relative w-96 inline-flex font-semibold group">
                <input
                    type="number"
                    value={pincode}
                    onChange={(e)=> setPincode(e.target.value)}
                    id="pin-code-input"
                    className="flex w-min px-3 pr-0 py-3 peer group-hover:border-emerald-500 font-normal rounded-r-none rounded-l-md border-r-transparent bg-transparent text-gray-700 placeholder-gray-500 border border-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 text-md"
                    placeholder="Your pin code 110XXX" 
                    required={true} 
                    maxLength={6}
                    minLength={6}
                />
                <label
                    htmlFor="pin-code-input"
                    className="absolute z-[999] group-hover:text-emerald-500 left-4 -top-2.5 peer-focus:text-emerald-500 bg-gray-50 text-gray-500 text-sm px-1"
                >
                    {city}
                </label>
                <button
                onClick={handleSubmit}
                    type="submit"
                    className="flex items-center group-hover:bg-emerald-500 peer-focus:bg-emerald-500 font-semibold px-4 py-2 border border-transparent text-md rounded-r-md text-white bg-gray-500 hover:bg-emerald-500 focus:outline-none focus:ring-offset-2 focus:ring-emerald-500"
                >Check Service</button>
            </div>
        </div>
    )
}

export default PincodeChecker