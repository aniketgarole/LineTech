import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import BasketCartRoute from './pages/BasketCartRoute';


function App() {
  return (
    <div >
      {/* <NavBar/>
      <HomePage/> */}
     <BasketCartRoute />
    </div>
  );
}

export default App;
