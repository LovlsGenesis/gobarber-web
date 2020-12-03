import React from 'react';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import Logo from '../../assets/logo.svg';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>

      </Content>
    </Container>
  );
};

export default SignUp;
