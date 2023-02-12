import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { getStatusFilter } from 'redux/selectors';

import { getContacts } from 'redux/selectors';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li className={css.item} key={contact.id}>
                  <Contact contact={contact} />
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
