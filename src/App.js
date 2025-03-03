import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import NavBar from "./components/NavBar"
import QuickTest from './components/QuickTest';
import StandardTest from './components/StandardTest'
import Home from './pages/Home';
import TestDetails from './pages/TestDetails';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import AdvancedTest from './components/AdvancedTest';

function App() {
    const location = useLocation();

    const testsRoutes = ['/quick-test', '/standard-test'];

  return (
    <>
      {!testsRoutes.includes(location.pathname) && <NavBar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="quick-test" element={<QuickTest />} />
        <Route path="standard-test" element={<StandardTest />} />
        <Route path="advanced-test" element={<AdvancedTest />} />
        <Route path=":testName/test-details" element={<TestDetails />} />
        <Route path="about" element={<AboutUs/>} />       
      </Routes>
      {!testsRoutes.includes(location.pathname) && <Footer/>}

    </>
  );
}

export default App;
