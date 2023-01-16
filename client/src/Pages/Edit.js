import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap"
import {Link, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { editContact, getContact } from '../JS/Action/contact'

const Edit = () => {
  const {_id} = useParams();
  const [newContact, setNewContact]= useState({
    name: "",
    age: "",
    email: "",
    phone: ""
  });
  const oneContact = useSelector (state => state.contactReducer.oneContact)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewContact({...newContact, [e.target.name] : e.target.value});
  };
  useEffect(() => {
    dispatch(getContact(`${_id}`));
    
  }, [dispatch])
  
  const edit = () => {
    dispatch (editContact(_id, newContact));
  };
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder={`${oneContact.name}`} 
            name='name' 
            value={newContact.name} 
            onChange ={handleChange} 

        />
        <Form.Label>Age</Form.Label>
        <Form.Control 
            type="number" 
            placeholder={`${oneContact.age}`}
            name='age' 
            value={newContact.age} 
            onChange ={handleChange}
        />
        <Form.Label>Email </Form.Label>
        <Form.Control 
            type="email"
            placeholder= {`${oneContact.email}`}
            name='email' 
            value={newContact.email} 
            onChange ={handleChange} />
        <Form.Label>phone</Form.Label>
        <Form.Control 
            type="number" 
            placeholder= {`${oneContact.phone}`}
            name='phone' 
            value={newContact.phone} 
            onChange ={handleChange} />        
      </Form.Group>
      <Link to={'/users'}>
      <Button 
        variant="primary" 
        type="submit"
        onClick={edit}
        >
        Submit
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Edit