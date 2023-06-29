import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { Container, Button } from './contactItem.styled';
import { getItems } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';

const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const normalazedFilter = filterValue.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );

  return (
    <div>
      {filteredContacts.map(contact => (
        <Container key={contact.id}>
          <li>
            {contact.name}: {contact.phone}
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
