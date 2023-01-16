import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap";
import {useDispatch} from "react-redux"
import { addContact } from '../JS/Action/contact';
import {Link} from "react-router-dom";
const Add = () => {
  const [newContact, setNewContact]= useState({
    name: "",
    age: "",
    email: "",
    phone: ""
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewContact({...newContact, [e.target.name] : e.target.value});
  };
  const add = () => {
    dispatch (addContact(newContact));
  };
  return (
    <div>
        <h2> ADD CONTACT</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter name" 
            name='name' 
            value={newContact.name} 
            onChange ={handleChange} 

        />
        <Form.Label>Age</Form.Label>
        <Form.Control 
            type="number" 
            placeholder="Enter age" 
            name='age' 
            value={newContact.age} 
            onChange ={handleChange}
        />
        <Form.Label>Email </Form.Label>
        <Form.Control 
            type="email"
            placeholder="Enter email"
            name='email' 
            value={newContact.email} 
            onChange ={handleChange} />
        <Form.Label>phone</Form.Label>
        <Form.Control 
            type="number" 
            placeholder="Enter phone"
            name='phone' 
            value={newContact.phone} 
            onChange ={handleChange} />        
      </Form.Group>
      <Link to={'/users'}>
      <Button 
        variant="primary" 
        type="submit"
        onClick={add}
        >
        ADD
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Add