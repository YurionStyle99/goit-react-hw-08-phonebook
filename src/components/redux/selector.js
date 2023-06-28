import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectErrors = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filterValue) => {
  const filteredContacts = contacts?.filter(
    contact => contact.name.toLowerCase().includes(filterValue) || contact.number.toLowerCase().includes(filterValue)
  );

  const uniqueContacts = filteredContacts?.filter(
    (contact, index, self) => index === self.findIndex(c => c.name.toLowerCase() === contact.name.toLowerCase())
  );

  return uniqueContacts;
});
