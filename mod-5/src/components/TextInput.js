import React from 'react';

function TextInput({ label, value, onChange, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className={'form-control ' + error ? 'is-invalid' : 'is-valid'}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">Error: {error}</div>}
    </div>
  );
}

export default TextInput;
