import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <div className="app" style={{padding: "5px 20px"}}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
  )
}