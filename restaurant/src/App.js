import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MenuItems from './components/MenuItems';
import MenuFunc from './components/MenuFunc';
import CataegoryDisplay from './components/CategoryDisplay';

function App() {
  return (
    <div className="App-header">
      {/* <MenuItems rname = "JJ's" /> */}
      <MenuFunc/> 
      {/* <CataegoryDisplay/> */}
    </div>
  );
}

export default App;
