import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { selectFilter } from '../redux/selector';
import styles from "../styles.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          placeholder="Name"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default Filter;
