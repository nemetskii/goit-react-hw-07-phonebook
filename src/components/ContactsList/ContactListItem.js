import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './ContactListItem.module.css';

export const ContactsListItem = ({ contact, onDeleteButton }) => {
  const [isClicked, setIsClicked] = useState(false);

  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <li className={css.list__item}>
        <span>
          {contact.name}: {contact.phone}
        </span>
        <button
          disabled={isLoading && isClicked}
          type="button"
          onClick={() => {
            setIsClicked(true);
            onDeleteButton(contact.id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};
