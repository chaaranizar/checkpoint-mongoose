import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import { deleteContact } from '../JS/Action/contact'
import {Link} from "react-router-dom"
import './contactcard.css'
const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  return (
    <div className='cards'>
      <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-20.png" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.age}</Card.Text>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <div className='btn'>
        <Link to={`/edit/${contact._id}`}><Button className='btn1' variant="primary">EDIT</Button></Link>
        <Button variant="primary" onClick={() => dispatch(deleteContact(contact._id))}>DELETE</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard