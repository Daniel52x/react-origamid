import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import UseForm from '../../Hooks/UseForm';
import UseFetch from '../../Hooks/UseFetch';
import { PASSWORD_LOST } from '../../Api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = UseForm();
  const { data, loading, error, request } = UseFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a Senha" />
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
