import React from 'react';
import { ContactItem } from './ContactItem';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          deleteContact={deleteContact}
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};
