import React from 'react';
import Logo from '../../components/Imagens/Logo2.png';
import { HomeContainer, NavHome, ButtonLogin, BodyHome, ImgLogo, TextoHome, ButtonVerViagens } from '../styled';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    };
    const onClickReservar = () => {
        history.push(`/inscricao`);
    };
    return (
        <HomeContainer>
            <NavHome>
                <ButtonLogin variant="contained" color={'primary'} onClick={goToLoginPage}>Fazer Login</ButtonLogin>
            </NavHome>
            <BodyHome>
                <ImgLogo src={Logo}/>
                <TextoHome>"Encontre as melhores viagens espaciais!"</TextoHome>
                <ButtonVerViagens variant="contained" color={'primary'} onClick={onClickReservar}>RESERVE SEU LUGAR AQUI</ButtonVerViagens>
            </BodyHome>
        </HomeContainer>
    );
};