import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import ErrorDiv from './ErrorDiv';
import List from './List';
export default function Home(props) {
  const history = useHistory();
  const [errors, setErrors] = useState(false);
  const {
    handleNameChange,
    handleDelete,
    name,
    saveName,
    list } = props;
  function changeView() {
    if ((list.length >= 3) && (list.length % 2 === 0)) {
      history.push("/list")
      setErrors(false);
    } else {
      history.push("/")
      setErrors(true);
      setTimeout(() => {
        setErrors(false)
      }, 5000);
    }
  }
  return (
    <>
      <h3>Get Started</h3>
      <ul className="App-normal">
        <li>1. Fill in the names of each individuals in your team</li>
        <li>2. Press <code>Generate</code> to pair teammembers</li>
        <li>3. Press <code>Download</code> or <code>Email</code> to finalize</li>
      </ul>
      <span className="App-empty"></span>
      <p className="App-note">Your generated list will not be saved so be sure to print or email the list to yourself and your teammembers.</p>
      <div>
        <section className="App-sectionone">
          <div className="App-formArea">
            <form>
              <input
                type="text"
                name="name"
                className="App-res"
                placeholder="Enter team members name"
                onChange={handleNameChange}
                value={name}
              />
              <button onClick={saveName}>Add</button>
            </form>
          </div>
        </section>
      </div>
      {errors ? <ErrorDiv /> : null}
      <List list={list} handleDelete={handleDelete} />
      <p style={{ textAlign: "center", margin: "0" }}>
        <button onClick={changeView} id="App-generateButton">Generate</button>
      </p>
    </>
  )
}
