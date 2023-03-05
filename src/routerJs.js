import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

function RouteJs() {
  return (
    <>
    <main className="bg-gray-50">
      <Routes>
        <Route path="*" element={<Loading/>} />
        <Route path="/" loader={<Loading/>} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </main>
    </>
  );
}

export default RouteJs;
