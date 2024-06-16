import css from "./App.module.css";
import contactsArray from "./contactsArray";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringified = localStorage.getItem("contacts");
    if (!stringified) {
      return contactsArray;
    }
    const contactsParse = JSON.parse(stringified);
    return contactsParse;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  function handleChange(evt) {
    setFilter(evt.target.value);
  }

  function onAddNewContact(newContact) {
    const addedContact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, addedContact]);
  }

  function onDeleteContact(contactId) {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  }

  const filterContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddNewContact} />
      <SearchBar value={filter} onFilter={handleChange} />
      <ContactList contactValue={filterContacts} onDelete={onDeleteContact}/>
    </div>
  );
}

export default App;
