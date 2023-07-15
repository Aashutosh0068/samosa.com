import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative bg-white-25">
      
      <Image src="/alt.png" alt="Banner" className="w-full h-auto opacity-1 overflow-hidden object-cover" width="1000" height="1080" />
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl sm:text-5xl text-white font-bold mb-4">Samosa Delivery</h1>
          <p className="text-lg sm:text-3xl text-white font-medium mb-8">Get freshly made samosas delivered to your door!</p>
          <button className="bg-yellow-500 text-xl hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;