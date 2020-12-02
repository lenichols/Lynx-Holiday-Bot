import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API from '../utils/API';
import Modal from 'react-bootstrap/Modal';

export default function PairedList(props) {
  const { pairs, generate } = props;
  const [show, setShow] = useState(false);
  const [newPairs, setNewPairs] = useState([])
  const [email, setEmail] = useState('');

  useEffect(() => { setNewPairs(generate()) }, [])

  function downloadCSV(pair) {
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
    link.setAttribute("download", "LynxBot.csv");
    document.body.appendChild(link);
    link.click();
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmitEmail(e) {
    e.preventDefault();
    if (email) {
      API.postEmail(email, newPairs)
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Link to="/" id="PairedList-backBtn"><small>← GO BACK</small></Link>
      <p style={{ textAlign: "center", margin: "0" }}>
        <button id="App-generateButton" onClick={() => { setNewPairs(generate(pairs)) }}>Generate</button>
      </p>
      <p><small>Don't like your list? Click generate again.</small></p>
      <div>
        <ul id="App-nameslist">
          {newPairs.map((name, i) => {
            return <li key={i}>{name[0]} &lt;=&gt; {name[1]}</li>
          })}
        </ul>
      </div>
      <p><small>Your Secret Santa list has been generated!<br />Choose an option below.</small></p>
      <div id="PairedList-nextBtns">
        <button onClick={() => downloadCSV(newPairs)}>Download</button>
        <button onClick={handleShow}>Email</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Let Us Send You Your List</Modal.Title>
        </Modal.Header>
        <form className="p-3">
          <input
            className="App-res"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            id="App-emailInput"
            placeholder="Please enter email here."
          />
          <p className="text-center">
            <button id="PairedList-submitBtn" onClick={handleSubmitEmail}>SUBMIT</button>
          </p>
        </form>
      </Modal>
    </>
  )
}
