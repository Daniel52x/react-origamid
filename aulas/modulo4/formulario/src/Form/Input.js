import React from 'react';

const Input = ({ id, label, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" name={id} onChange={onChange} {...props} />
    </>
  );
};

export default Input;
