import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer, Img, ButtonSingIn } from '../styled';
import astro from '../../components/Imagens/tenor.gif';

export const LogoutPage = () => {
    const history = useHistory();

    const pageInicial = () => {
      history.push("/");
    };
    return (
        <LoginContainer>
            <Img src={astro}/>
            <h1>LOGOUT!!!!</h1>
            <ButtonSingIn
                variant="contained"
                color={"primary"}
                onClick={pageInicial}>
            Pagina inicial
            </ButtonSingIn>
        </LoginContainer>
    );
};