import { nanoid } from 'nanoid';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Contact } from './Contact/Contact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import styles from './App.module.css';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const initialContacts = useMemo(() => {
    return (
      JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  }, []);

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = useCallback(
    ({ name, number }) => {
      if (contacts.some(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
      } else {
        setContacts(prevContacts => [
          ...prevContacts,
          { id: nanoid(), name, number },
        ]);
      }
    },
    [contacts]
  );

  const deleteContact = useCallback(id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  }, []);

  const changeFilter = useCallback(e => {
    setFilter(e.target.value);
  }, []);

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div className={styles.container}>
      <h1 className={styles.phonebookTitle}>Phonebook</h1>
      <Contact onSubmit={formSubmitHandler} />
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
