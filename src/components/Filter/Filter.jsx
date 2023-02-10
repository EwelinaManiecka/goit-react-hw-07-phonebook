import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';
import { getStatusFilter } from 'redux/selectors';
// import { statusFilter } from 'redux/constants';
// import { selectStatusFilter } from 'redux/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectStatusFilter);

  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  // const handleFilter = event => {
  //   dispatch(setStatusFilter(event.target.value));
  // };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(statusFilter.toLowerCase());
  });

  return (
    <>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
      ></input>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
