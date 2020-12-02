import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from '../assets/imgs/LynxLogo.svg';
import './App.css';
import Home from './Home';
import PairedList from './PairedList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  // saves name to list
  // keeps page from reloading
  // clears name input
  function saveName(e) {
    e.preventDefault();
    if (name) {
      addName(name);
      setName("");
    }
  }
  // add name to list
  function addName(name) {
    setList([name, ...list]);
  }
  // randomizes list from original input
  function generateList(list) {
    return list.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
  // takes randomized list and makes pairs
  function generatePairs(list) {
    return list.reduce(function (result, value, index, array) {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      return result;
    }, []);
  }
  // generates random paired elements from original list
  function generate() {
    return generatePairs(generateList(list))
  }
  // setname to add to list
  function handleNameChange(e) {
    setName(e.target.value)
  }
  // delete name from list
  function handleDelete(name, index) {
    const newList = list.filter(items => items !== name)
    setList(newList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Lynx Holiday Bot BG-Img" />
        <p className="Holiday-text">Holiday Bot</p>
        <p>
          A fun Secret Santa Generator for Teams across organizations.
          </p>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                handleNameChange={handleNameChange}
                name={name}
                saveName={saveName}
                list={list}
                handleDelete={handleDelete}
              />
            </Route>
            <Route exact path="/list">
              <PairedList
                pairs={list}
                generate={generate}
              />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
