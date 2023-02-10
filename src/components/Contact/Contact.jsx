import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{contact.text}</p>
      <button onClick={handleDelete}></button>
    </div>
  );
};
