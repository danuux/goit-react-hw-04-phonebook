import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.contactLabel}>
      Find contacts by name
      <input
        className={styles.contactInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
