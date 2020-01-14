import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ label, handleChange, ...otherFormProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherFormProps} />
      { label ? <label className={`${otherFormProps.value.length ? 'shrink' : ''}`}>{label}</label> : null }
    </div>
  );
};

export default FormInput;
