import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
  };

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div className={styles.columnInputs}>
        <span className={styles.inputTitle}>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={styles.columnInputs}>
        <span className={styles.inputTitle}>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      </div>
        <Button>
              Add column
        </Button>
    </form>
  );
};

export default ColumnForm;