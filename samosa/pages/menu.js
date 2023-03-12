import SamosaCard from '@/components/SamosaCard';
import React from 'react';
import Loading from '@/components/Loading';
import mongoose from 'mongoose';
import Samosa from '@/models/Samosa';

const Menu =({data})=>{

  return (
    <div className="flex flex-wrap bg-gray-50 justify-center mt-6">{
      data ?(
      <>
      {data.map(samosa => (
        <SamosaCard key={samosa._id} samosa={samosa} />
      ))}
      </>
      ):(
        <Loading/>
      )
}
    </div>
  );
};

export default Menu;

export async function getServerSideProps() {
  if(!mongoose.connections[0].readyState){
  await mongoose.connect(process.env.MONGO_URI)
  }

  let samosa = await Samosa.find()
  
  const data = JSON.parse(JSON.stringify(samosa));

  return {
    props: { data }
  }
}