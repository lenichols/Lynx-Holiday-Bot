import React, { Component } from 'react';
import logo from './assets/imgs/LynxLogo.svg';
import {
  PopupboxManager,
  PopupboxContainer
} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import './App.css';

class App extends React.Component<any, any> {

  state: {
    names: any[],
    name: any[]
  }

  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state={names:[], name: [] };
    this.updateInput = this.updateInput.bind(this);
    this.generate = this.generate.bind(this);
    this.save = this.save.bind(this);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus();
  }

  downloadCSV(pair: any) {
    const arrayContent = pair;
    let csvContent = "data:text/csv;charset=utf-8,";
    arrayContent.forEach(function (rowArray) {
      for (let i = 0, len = rowArray.length; i < len; i++) {
        if (typeof (rowArray[i]) == 'string')
          rowArray[i] = rowArray[i].replace(/<(?:.|\n)*?>/gm, '');
        rowArray[i] = rowArray[i].replace(/,/g, '');
      }
      let row = rowArray.join(",");
      csvContent += row + "\r\n"; // add carriage return
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "fileName.csv");
    document.body.appendChild(link);
    link.click();
  }

  openMessagePopupbox() {
    const content = (
      <div>
        <p className="quotes">In order to generate a randomized paired list,</p>
        <p className="quotes"> you need to have an even number of persons</p>  
        <p className="quotes"> and have at least two names added.</p>       
        <span className="quotes-from">― Santa Bot</span>
      </div>
    )
    PopupboxManager.open({ content })
  }


  openGeneratePopupbox(p) {
    const content = (
      <div>
        <p className="quotes">Your Secret Santa list has been generated!<br/>Choose an option below.</p>

        <p className="downloadLink">Email</p> 
        <p className="blueLink">or</p> 
        <p className="downloadLink"><a href="javascript:void(0)" onClick={() => this.downloadCSV(p)}>Download</a></p>       
        {/* <span className="quotes-from">― Santa Bot</span> */}
      </div>
    )
    PopupboxManager.open({ content })
  }

  generate() {

    if ((this.state.names.length >= 3) && (this.state.names.length % 2 == 0)) {
      console.log("List is even with total names = ", this.state.names.length);

      this.state.names.sort(() => 0.5 - Math.random());

      const pairs: any[] = [];

      // as we need at least players to form a pair
      while (this.state.names.length >= 2) { 
        const pair = [this.state.names.pop(), this.state.names.pop()];

        // Current pair
        //console.log('Single pair', pair);

        // Save current pair
        pairs.push(pair);
      }

      // All pairs
      console.log('All pairs', pairs);
      this.openGeneratePopupbox(pairs);

    } else {
      //alert("your array is not even, add one more name");
      this.openMessagePopupbox()
    }

  }

  updateInput(event: any){
    this.setState({name : event.target.value})
  }
  
  save(event: any) {
    event.preventDefault();
    this.state.names.push(this.state.name);
    this.setState({name: ''});
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <p className="Holiday-text">Holiday Bot</p>
          <p>
            A fun Secret Santa Generator for Teams across organizations.
          </p>
          <h3>Get Started</h3>
          <ul className="App-normal">
            <li>1. Fill in the names of each individuals in your team</li>
            <li>2. Press <code>Generate</code> to pair teammembers</li>
            <li>3. Press <code>Print</code> or <code>Email</code> to finalize</li>
          </ul>
          <span className="App-empty"></span>
          <p className="App-note">Your generated list will not be saved so be sure to print or email the list to yourself and your teammembers.</p>
          <section className="App-sectionone">
            <div className="App-formArea">
            <form>
              <input ref={this.inputRef} type="text" name="name" className="App-res" placeholder="Enter team members name" onChange={this.updateInput} value={this.state.name} />
              <button onClick={this.save.bind(this)} type="submit">Add</button>
            </form>
            </div>
          </section>
          <div>
              <ul id="App-nameslist">
              {this.state.names.map(function(name, i) {
                      return <li key={i}>{name}</li>
              })}
              </ul>
            </div>
            <div>
            <button id="App-generateButton" onClick={this.generate.bind(this)} type="button">Generate</button>
            <PopupboxContainer />
            </div>
        </header>
      </div>
    );
  }
}

export default App;
