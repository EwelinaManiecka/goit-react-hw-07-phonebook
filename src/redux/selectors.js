import { createSelector } from '@reduxjs/toolkit';
import { statusFilter } from './constants';

export const selectContacts = state => state.contacts.items;

export const selectStatusFilter = state => state.filters.status;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, statusFilter) => {
    switch (statusFilter) {
      case statusFilter.active:
        return contacts.filter(contact => !contact.completed);
      case statusFilter.completed:
        return contacts.filter(contact => contact.completed);
      default:
        return contacts;
    }
  }
);
