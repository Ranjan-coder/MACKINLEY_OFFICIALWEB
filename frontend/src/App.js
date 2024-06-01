import "./App.css";
import Routers from "./Router/Routers";
import Navebar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

import ScrollToTop from "./Component/scroll_top/scroll";

import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>

      <ScrollToTop />

      <Toaster />

      <Navebar />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
