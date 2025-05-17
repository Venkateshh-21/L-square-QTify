import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Hero from './components/herosection';
import Albums from "./components/albums"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Albums />
    </div>
  );
}

export default App;
