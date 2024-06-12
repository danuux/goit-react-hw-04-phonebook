import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ filter, OnChange }) => {
  return (
    <label className={styles.contactLabel}>
      Find contacts by name
      <input
        className={styles.contactInput}
        type="text"
        name="filter"
        value={filter}
        onChange={OnChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};
