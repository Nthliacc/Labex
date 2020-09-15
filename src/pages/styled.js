import styled from 'styled-components';
import back from '../components/Imagens/back.jpg';
import Button from '@material-ui/core/Button';
import { TextField, Fab } from '@material-ui/core';

export const AppContainer = styled.div`
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
`;

//Home Page
export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: url(${back});
`;
export const NavHome = styled.div`
    height: 15%;
    width: 99%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;
export const ButtonLogin = styled(Button)`
    height: 50px;
`;
export const BodyHome = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ImgLogo = styled.img`
    width: 40%;
`;
export const TextoHome = styled.h2`
    color: white;
    text-shadow: 0 0 0.2em black, 0 0 0.2em black;
`;
export const ButtonVerViagens = styled(Button)`
    height: 50px;
`;

// Login Page
export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${back});
    color: white;
`;
export const FabLogin = styled(Fab)`
    align-self: flex-start;
`;
export const ImgLogoLogin = styled.img`
    height: 100px;
    display: flex;
    justify-self: flex-start;
`;
export const TextLogin = styled.h1`
    color: black;
`;
export const BoxLogin = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    background: white;
    opacity: 0.85;
`;
export const LinkRecuperarSenha = styled.a`
    color: #ff7800;
`;
export const InputLogin = styled(TextField)`
    height: 35px;
    width: 250px;
`;
export const ButtonSingIn = styled(Button)`
    height: 40px;
`;

// NavAdmin
export const NavContainer = styled.div`
    padding: 0 40px;
    height: 20%;
    color: white;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ImgLogoNav = styled.img`
    height: 70px;
`;
export const ButtonsNav = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    button{
        margin: 4px;
    }
`;

// Admin Page
export const AdminContainer = styled.div`
    background-image: url(${back});
    display: flex;
    flex-direction: column;
`;
export const RouterContainer = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Request Page
export const RequestContainer = styled.div`
    margin: 5%;
    padding: 16px;
    width: 60%;
    color: black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    a:-webkit-any-link {
        text-decoration: none;
        color: black;
    }
`;

// Create Trips Page
export const CreateTripsContainer = styled.div`
    min-height: 85vh;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const FormCriarViagem = styled.form`
    height: 400px;
    width: 350px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: black;
    background: white;
    border-radius:15px;
`;
export const ButtonCriarViagem = styled(Button)`
`;
export const InputCriarViagem = styled(TextField)`
    width: 250px;
    :valid {
        color: green;
    }

    :invalid {
        color: red;
    }
`;

//Inscrição Page
export const InscricaoContainer = styled.div`
    background-image: url(${back});
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ButtonsInscricao = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const CardInscricao = styled.form`
    height: 550px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    background: white;
    color: black;
`;
export const ButtonInscricao = styled(Button)`
    height: 40px;
`;
export const InputInscricao = styled(TextField)`
    width: 350px;
`;
