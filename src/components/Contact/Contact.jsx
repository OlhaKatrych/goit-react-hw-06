import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact({ data, onDelete }) {
  return (
    <div className={css.elemContainer}>
      <div className={css.textNumberContainer}>
        <p className={css.textName}>
          <span className={css.symbol}>
            <IoPersonSharp />
          </span>
          <b>{data.name}</b>
        </p>
        <p className={css.phone}>
          <span className={css.symbol}>
            <BsFillTelephoneFill />
          </span>
          <b>{data.number}</b>
        </p>
      </div>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => onDelete(data.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
