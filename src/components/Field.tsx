import React from 'react';

// Styles
import styles from './Field.module.css';

interface Props {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  value: string;
}

const Field: React.FC<Props> = ({ name, label, type, placeholder, onChange, value }) => {
  return (
    <div className={styles.Field}>
      <label className={styles.Field__Label}>{label}</label>
      <input
        className={styles.Field__Input}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Field.defaultProps = {
  type: 'text',
  placeholder: 'Type Here'
};

export default Field;
