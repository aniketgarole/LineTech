import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import MainRoutes from './components/MainRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      {/* <NavBar/> */}
      <MainRoutes/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
