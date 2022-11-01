import React from 'react';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contacts => (
        <li key={contacts.nameId}>
          <span>{contacts.name}</span>
          <span>{contacts.number}</span>
        </li>
      ))}
    </ul>
  );
};
