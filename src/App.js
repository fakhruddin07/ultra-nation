import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Home from './components/Country/Home/Home';

function App() {
  const [countries, setCountries] = useState([])
  const [home, setHome] = useState([])

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (country) => {
    const newHome = [...home, country]
    setHome(newHome)
  }

  return (
    <div className="App">\
    <h1>Country loaded : {countries.length}</h1>
    <h4>Country added : {home.length}</h4>
    <Home home={home}></Home>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
