import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideCart from "@/components/SideCart";
import '@/styles/globals.css';
import { getValue, setValues } from "@/values/setValues";
import userState from "@/values/userState";
import Head from "next/head";
import { useEffect } from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }) => {

  useEffect(()=>{
    setValues(userState())
    window.alert(getValue())
  })

  return (
    <main className="overflow-x-hidden bg-gray-50">
      <Head><title>Samosa | Pride Of Indian</title></Head>
      <Navbar />
      <ToastContainer />
      <Component {...pageProps} />
      <SideCart />
      <Footer />
    </main>
  );
};
export default App;
