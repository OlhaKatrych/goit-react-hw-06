import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contactValue, onDelete }) {
  return (
    <ul className={css.listContainer}>
      {contactValue.map((contact) => (
        <li key={contact.id} className={css.listContact}>
          <Contact data={contact} onDelete={onDelete}/>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
