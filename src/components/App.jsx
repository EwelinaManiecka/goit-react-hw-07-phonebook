import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  getContacts,
  getStatusFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';
import css from './App.module.css';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts');
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const addContacts = ({ id, name, number }) => {
  //   if (
  //     contacts.find(contact => {
  //       return contact.name === name;
  //     })
  //   ) {
  //     return alert(`${name} is already in contacts`);
  //   }
  //   const contact = {
  //     id,
  //     name,
  //     number,
  //   };
  //   setContacts(prevState => [contact, ...prevState]);
  // };

  // const filterContact = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });

  // const filterChange = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      <ContactList />
    </div>
  );
}

export default App;
