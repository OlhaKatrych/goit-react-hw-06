import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const contactValue = useSelector(selectContacts);
  return (
    <ul className={css.listContainer}>
      {contactValue.map((contact) => (
        <li key={contact.id} className={css.listContact}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
