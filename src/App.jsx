import css from "./App.module.css";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";

import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [filter, setFilter] = useState("");

  function handleChange(evt) {
    setFilter(evt.target.value);
  }

  function onDeleteContact(contactId) {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  }

  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBar value={filter} onFilter={handleChange} />
     {/* <ContactList contactValue={filterContacts} onDelete={onDeleteContact} />*/}
    </div>
  );
}

export default App;
