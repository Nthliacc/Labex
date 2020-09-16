import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  LoginContainer,
  TextLogin,
  BoxLogin,
  InputLogin,
  LinkRecuperarSenha,
  ButtonSingIn,
} from "../styled";
import { useForm } from "../../components/Hooks";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian";

export const LoginPage = () => {
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    email: '',
    password: ''
  });

  const fazerLogin = async () => {
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        history.push("/my-trips");
      })
      .catch((error) => {
        alert("Você não possui cadastro com a gente :/");
        console.log("Deu erro", error);
      });
  };
  return (
    <LoginContainer>
      <BoxLogin>
        <TextLogin>Login</TextLogin>
        <InputLogin
          onChange={onChangeInput}
          type={"email"}
          placeholder={"Email"}
          value={form['email']}
        />
        <InputLogin
          onChange={onChangeInput}
          type={"password"}
          placeholder={"Senha"}
          value={form['password']}
        />
        <LinkRecuperarSenha href={"#"}>Esqueci a senha</LinkRecuperarSenha>
        <ButtonSingIn
          variant="contained"
          color={"primary"}
          onClick={fazerLogin}
        >
          Entrar
        </ButtonSingIn>
      </BoxLogin>
    </LoginContainer>
  );
};