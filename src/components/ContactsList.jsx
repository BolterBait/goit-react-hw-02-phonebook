import React from 'react';
import PropTypes from 'prop-types';
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

ContactsList.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};