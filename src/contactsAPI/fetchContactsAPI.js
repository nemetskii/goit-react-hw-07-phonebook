export const getContacts = async () => {
  let contacts = await fetch(
    'https://64dd227be64a8525a0f7a6eb.mockapi.io/phonebook/v1/contacts'
  );
  if (!contacts.ok) {
    throw new Error(contacts.statusText);
  }

  return contacts.json();
};

export const addContactToDatabase = async contact => {
  let request = await fetch(
    'https://64dd227be64a8525a0f7a6eb.mockapi.io/phonebook/v1/contacts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    }
  );

  if (!request.ok) {
    throw new Error(request.statusText);
  }
  return request.json();
};

export const removeContactFromDatabase = async contactId => {
  let request = await fetch(
    `https://64dd227be64a8525a0f7a6eb.mockapi.io/phonebook/v1/contacts/${contactId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!request.ok) {
    throw new Error(request.statusText);
  }
};
