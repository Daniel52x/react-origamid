import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="cep"
        label="CEP"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input id="email" label="E-mail" type="email" {...email} />
      <Input id="nome" label="nome" type="text" {...nome} />
      <Input id="sobrenome" label="sobrenome" type="text" {...sobrenome} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
