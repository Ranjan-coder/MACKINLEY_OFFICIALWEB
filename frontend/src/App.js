import "./App.css";
import Routers from "./Router/Routers";
import Navebar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navebar />

      <Routers />
      <Footer />
    </>
  );
}

export default App;
