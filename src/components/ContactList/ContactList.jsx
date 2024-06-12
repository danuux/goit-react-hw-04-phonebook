import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact, id) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contactText}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={styles.contactListBtn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
};
