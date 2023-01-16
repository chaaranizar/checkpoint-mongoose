import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getContacts} from '../JS/Action/contact'
import ContactCard from './ContactCard'
import './contactlist.css'
const Contactlist = () => {
  const listContacts =useSelector(state => state.contactReducer.listContacts);
  const dispatch = useDispatch();
  const load = useSelector(state => state.contactReducer.load);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])
  
  return (
    <div className='list'>
      {load? <h2>Loading...</h2> : listContacts.map((el) => <ContactCard contact = {el} key= {el.id}/>)}
    </div>
  )
}

export default Contactlist