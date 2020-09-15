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

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian";

export const LoginPage = () => {
  const [emailValue, setEmail] = useState("");
  const [senhaValue, setSenha] = useState("");
  const [LoginValue, setLogin] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const history = useHistory();

  const fazerLogin = async () => {
    const body = {
      email: emailValue,
      password: senhaValue,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        setLogin(resposta.data.login);
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
          onChange={onChangeEmail}
          type={"email"}
          placeholder={"Email"}
        />
        <InputLogin
          onChange={onChangeSenha}
          type={"password"}
          placeholder={"Senha"}
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