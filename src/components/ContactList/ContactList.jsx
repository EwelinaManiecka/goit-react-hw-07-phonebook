import React from 'react';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

import { getContacts, getStatusFilter } from 'redux/selectors';
// import { selectVisibleContacts } from 'redux/selectors';

const getVisibleContacts = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.active:
      return contacts.filter(contact => !contact.completed);
    case statusFilter.completed:
      return contacts.filter(contact => contact.completed);
    default:
      return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  // const dispatch = useDispatch();
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(statusFilter.toLowerCase());
  });

  // const deleteItemContact = id => {
  //   return dispatch(deleteContact(id));
  // };

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {visibleContacts.map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <Contact contact={contact} />
                <button
                  className={css.btnDelete}
                  type="button"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification message="You don't have this contact." />
      )}
    </>
  );
};

ContactList.prototype = {
  statusFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
