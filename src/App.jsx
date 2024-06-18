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

  return (
    <div className={css.rootContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBar value={filter} onFilter={handleChange} />
      <ContactList />
    </div>
  );
}

export default App;
