import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideCart from "@/components/SideCart";
import '@/styles/globals.css'
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <main className="overflow-x-hidden bg-gray-50">
      <Head><title>Samosa | Pride Of Indian</title></Head>
      <Navbar/>
      <Component {...pageProps} />
      <SideCart/>
      <Footer/>
    </main>
  );
};
export default App;
