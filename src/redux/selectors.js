import { createSelector } from '@reduxjs/toolkit';
// import { statusFilter } from './constants';

export const getContacts = state => state.contacts.items;

export const getStatusFilter = state => state.filters.status;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getContacts, getStatusFilter],
  (contacts, statusFilter) => {
    if (!statusFilter) return contacts;
    return contacts.filter(contact => contact.name.includes(statusFilter));
  }
);
