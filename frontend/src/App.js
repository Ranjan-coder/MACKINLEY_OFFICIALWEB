import "./App.css";
import Routers from "./Router/Routers";
import Navebar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/scroll_top/scroll";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navebar />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
