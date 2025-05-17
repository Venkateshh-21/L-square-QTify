import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Hero from './components/herosection';
import Albums from "./components/albums"
import NewAlbums from './components/newAlbums';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Albums />
      <NewAlbums />
    </div>
  );
}

export default App;
