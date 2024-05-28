import './App.css';
import Routers from './Router/Routers';
import officiallogo from './Assets/officiallogo.png'
import Navbar from './Component/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import LogoLoader from './Component/Logo_Loader/LogoLoader';


function App() {

  const NavigateTo = useNavigate()
  return (
    <>
      <div className='navbarlayout'>
        <div>
          <img className='officiallogo' onClick={()=>NavigateTo('/')} src={officiallogo} alt='officiallogo' />
        </div>
        <div className='navbarroutes'>
        <Navbar />
        </div>
      </div>
      <Routers />
      <Footer/>
      <LogoLoader/>
    </>
  );
}

export default App;
