// import { createSelector } from '@reduxjs/toolkit';
// import { statusFilter } from './constants';

export const getContacts = state => state.contacts.items;

export const getStatusFilter = state => state.filters.status;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

// export const selectVisibleContacts = createSelector(
//   // [selectContacts, selectStatusFilter],
//   (contacts, statusFilter) => {
//     switch (statusFilter) {
//       case statusFilter.active:
//         return contacts.filter(contact => !contact.completed);
//       case statusFilter.completed:
//         return contacts.filter(contact => contact.completed);
//       default:
//         return contacts;
//     }
//   }
// );
