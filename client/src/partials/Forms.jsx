import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Forms(props) {
  const { type, handleNameSubmit, value, handleChange, name, button, placeholder, title } = props;
  return (
    <Form onSubmit={handleNameSubmit} className="Form">
      <label>{title} <span>*</span></label>
      <Form.Control type={type} value={value} onChange={handleChange} name={name} placeholder={placeholder} />
      <p className="text-center btn-para">
        <Button onClick={handleNameSubmit}>{button}</Button>
      </p>
    </Form>
  )
}
