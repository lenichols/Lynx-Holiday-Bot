import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import Forms from '../partials/Forms';
import List from '../partials/List';
import ErrorDiv from '../partials/ErrorDiv';
export default function AddNames(props) {
  const { handleNameSubmit, handleChange, handleGenerateAndChange, list, handleDelete, name } = props;
  const [errors, setErrors] = useState(false);
  const history = useHistory();
  const changeView = () => {
    if (list.length > 3 && list.length % 2 === 0) {
      handleGenerateAndChange(list)
      history.push("/pairs")
    } else {
      setErrors(true)
      setTimeout(() => setErrors(false), 4000);
    }
  }
  return (
    <>
      <Helmet>
        <title>SECRET SANTA LIST GENERATOR | HOME</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Free Random Secret Santa List Generator" />
        <meta name="keywords" content="free,secret,santa,secret,santa,list,lists,generator,list generator,gift,gifts,family,teams,coworkers,download,email,random list, random list generator" />
      </Helmet>
      <div>
        <Forms
          title="Name:"
          type="text"
          value={name}
          handleNameSubmit={handleNameSubmit}
          handleChange={handleChange}
          name="name"
          button="ADD"
          placeholder="Enter name here"
        />
        {errors ? <ErrorDiv /> : null}
        <p className="text-center btn-para" style={{ display: `${list.length > 3 ? "block" : "none"}` }}>
          <Button
            onClick={changeView}
          >GENERATE</Button>
        </p>
        <List list={list} givenClass="Og-List" handleDelete={handleDelete} />
        <hr />
      </div>
    </>
  )
}
