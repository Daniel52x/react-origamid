import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const array = ['item 1', 'item 2'];
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="senha" label="Senha" type="password" />
      <Button items={array} />
    </div>
  );
};

export default Form;
