import './App.css';
import Routers from './Router/Routers';
import officiallogo from './Assets/officiallogo.png'
import Navbar from './Component/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
function App() {

  const NavigateTo = useNavigate()
  return (
    <>
      {/* <div className='navbarlayout'>
        <div>
          <img className='officiallogo' onClick={() => NavigateTo('/')} src={officiallogo} alt='officiallogo' />
        </div>
        <div className='navbarroutes'>
          <Navbar />
        </div>
      </div> */}
      <Routers />
      <Footer />
    </>
  );
}

export default App;
