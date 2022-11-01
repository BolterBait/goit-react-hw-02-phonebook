import { React, Component } from 'react';
import Form from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

import { Container } from './Container.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formCreateContacts = contacts => {
    const { name, number } = contacts;
    const contact = { nameId: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formCreateContacts}></Form>
        <h2>Contacts</h2>
        <Filter filter={filter}></Filter>
        <ContactsList contacts={contacts}></ContactsList>
      </Container>
    );
  }
}
