import logo from "./logo.svg";
import "./App.scss";
import 'leaflet/dist/leaflet.css';
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import countries from './data/countries.json'

function App() {
  set  

  return (
    <div className="App">
      <Sidebar>
        <h1>hi</h1>
        <p>{countries['features'].map(f => f.properties.ADMIN + '\n')}</p>
      </Sidebar>
      <Map />
    </div>
  );
}

export default App;
