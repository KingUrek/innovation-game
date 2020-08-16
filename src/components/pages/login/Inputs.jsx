import React from 'react';

export default function Inputs({ att: { label, name, type, regex, required, value, clsName="input-form", placeholder, title, minLength } }) {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={clsName}
        required={required}
        value={value}
        pattern={regex}
        name={name}
        title={title}
        minLength={minLength}
      />
    </>
  );
}
