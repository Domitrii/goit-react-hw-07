import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectFilteredContacts, selectError, selectLoading } from "../../redux/contactsSlice"

const getVisibleContacts = (contacts, filters) => {
  return contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filters.toLowerCase())
  );
};

function ContactList() {
  const getVisibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError)

  return (
    <ul className={css.listUl}>
      {contactsVisible.map((contact) => {
        return (
          <Contact
            key={contact.id}
            number={contact.number}
            numberId={contact.id}
            numberName={contact.name}
          />
        );
      })}
    </ul>
  );
}

export default ContactList