import ContactList from "../ContactList/ContactList";
import css from "./SearchBar.module.css";

function SearchBar({ value, onFilter }) {
  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.inputSearch}
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}

export default SearchBar;
