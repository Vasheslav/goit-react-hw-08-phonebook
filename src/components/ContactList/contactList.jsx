import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Container, Button } from './contactItem.styled';
import { getItems } from '../../redux/contacts/selectors';

const ContactList = () => {
  const filterValue = useSelector(state => state.filters);
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const normalazedFilter = filterValue ? filterValue.toLowerCase() : '';
  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalazedFilter)
  );

  return (
    <div>
      {filteredContacts.map(contact => (
        <Container key={contact.id}>
          <li>
            {contact.name}: {contact.number}
          </li>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Container>
      ))}
    </div>
  );
};

export default ContactList;
