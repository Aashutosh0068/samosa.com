import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="animate-pulse">
        <div className="flex items-center justify-center">
          <img className="h-32 w-32 rounded-full" src="https://www.pngkit.com/png/full/914-9145282_samosa-samosa-images-hd-png.png" alt="Samosa" />
          <img className="h-32 w-32 rounded-full" src="https://recipes.timesofindia.com/photo/61050397.cms" alt="Samosa" />
          <img className="h-32 w-32 rounded-full" src="https://www.pngitem.com/pimgs/m/557-5575094_chicken-samosa-png-download-samosa-images-hd-png.png" alt="Samosa" />
        </div>
        <div className="text-center mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">Loading...</h2>
          <p className="text-gray-500">
            Please wait while we load your delicious samosas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;