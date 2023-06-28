import ContactForm from '../../ContactForm/ContactForm';
import ContactList from '../../ContactList/ContactList';
import Filter from '../../Filter/Filter';
import styles from '../../styles.module.css';
import css from '../Home/styles.module.css';

const Contacts = () => {
  return (
    <div className={css.container}>
      <div className={css.stars}></div>
      <div className={css.stars2}></div>
      <div className={css.stars3}></div>
      <div className={styles.contact_page_container}>
        <div className={styles.container_contact}>
          <h1>Name</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
