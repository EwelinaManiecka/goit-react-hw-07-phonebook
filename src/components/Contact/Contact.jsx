import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {contact.name}: {contact.phone}
      </p>

      <button className={css.btnDelete} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
