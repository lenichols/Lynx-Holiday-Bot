import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import AddNames from './components/AddNames';
import Header from './partials/Header';
import PairedList from './partials/PairedList';
import Footer from './partials/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [pairs, setPairs] = useState([]);
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setList([...list, name.toUpperCase()]);
      setName("");
    }
  }
  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleDelete = (item) => {
    const filtered = list.filter(d => d !== item)
    setList(filtered);
  }
  const randomizeList = (list) => {
    return list.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
  const generatePairs = (list) => {
    return list.reduce(function (result, value, index, array) {
      if (index % 2 === 0)
        result.push(array.slice(index, index + 2));
      return result;
    }, []);
  }
  const handleGeneratePairs = (list) => {
    setPairs(generatePairs(randomizeList(list)))
  }
  const handleGenerateAndChange = (list) => {
    if (list.length > 3 && list.length % 2 === 0) {
      setPairs(generatePairs(randomizeList(list)))
    }
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <AddNames
              handleNameSubmit={handleNameSubmit}
              handleChange={handleChange}
              handleGenerateAndChange={handleGenerateAndChange}
              list={list}
              handleDelete={handleDelete}
              name={name}
            />
          </Route>
          <Route exact path="/pairs">
            <PairedList
              pairs={pairs}
              list={list}
              handleGeneratePairs={handleGeneratePairs}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;