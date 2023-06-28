import { isLogged } from 'components/redux/auth/selectors';
import { selectVisibleContacts } from 'components/redux/selector';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/operations';
import ContactListItem from './ContactListItem';
import { isLoading } from 'components/redux/auth/selectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const logIn = useSelector(isLogged);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, logIn]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id)).catch(error => console.error(error));
  };

  return (
    <ul>
      {loading? <Loader size={'100'}/> :contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={() => handleDeleteContact(id)} />
      ))}
    </ul>
  );
};

export default ContactList;
