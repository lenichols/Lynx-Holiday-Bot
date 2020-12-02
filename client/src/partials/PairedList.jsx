import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import API from '../utils/API';

export default function PairedList(props) {
  const { pairs, handleGeneratePairs, list } = props;
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmitEmail(e) {
    e.preventDefault();
    if (email) {
      API.postEmail(email, pairs);
      handleClose();
      setEmail("");
    }
  }
  const downloadCSV = (pair) => {
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
    link.setAttribute("download", "SecretSanta.csv");
    document.body.appendChild(link);
    link.click();
  }
  return (
    <>
      <Helmet>
        <title>SECRET SANTA LIST GENERATOR | YOUR LIST</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CodeCrafters Acad" />
        <meta name="description" content="Free Random Secret Santa List Generator" />
        <meta name="keywords" content="free,secret,santa,secret,santa,list,lists,generator,list generator,gift,gifts,family,teams,coworkers,download,email,random list, random list generator" />
      </Helmet>
      <p className="text-center">
        <Link to="/" style={{ color: "black" }}>&#x261A; GO BACK</Link>
      </p>
      <small><p className="text-center my-0">DON'T LIKE YOUR LIST TAP GENERATE AGAIN!</p></small>
      <small><p className="text-center my-0">OR</p></small>
      <small><p className="text-center my-0">TAP DOWNLOAD OR EMAIL</p></small>

      <p className="text-center btn-para">
        <Button className="my-1" onClick={() => downloadCSV(pairs)}>DOWNLOAD</Button><br />
        <Button className="my-1" onClick={handleShow}>EMAIL</Button><br />
        <Button className="my-1" onClick={() => handleGeneratePairs(list)}>GENERATE</Button>
      </p>
      <ul id="App-nameslist">
        {pairs.map((name, i) => {
          return <li key={i}> <span>&#127876;</span>{name[0]} &amp; {name[1]}</li>
        })}
      </ul>
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
