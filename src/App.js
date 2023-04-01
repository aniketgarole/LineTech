import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import MainRoutes from './components/MainRoutes';

function App() {
  return (
    <div >
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
