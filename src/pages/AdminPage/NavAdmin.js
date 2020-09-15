import React from "react";
import { useHistory } from "react-router-dom";
import { NavContainer, ImgLogoNav, ButtonsNav } from "../styled";
import LogoNav from '../../components/Imagens/Logo2.png';
import { Button } from "@material-ui/core";

export const NavAdmin = () => {
  const history = useHistory();

  const onClickSair = () => {
    localStorage.clear();
    history.push("/out");
  };
  const goToCreateTrip = () => {
    history.push("/create-trip")
  };
  const goToMyTrips = () => {
    history.push("/my-trips")
  };
  return (
    <NavContainer>
      <ImgLogoNav src={LogoNav} />
      <ButtonsNav>
        <Button 
          color={"primary"} 
          variant="contained" 
          onClick={goToMyTrips}>
          Minhas viagens
        </Button>
        <Button 
          color={"primary"} 
          variant="contained" 
          onClick={goToCreateTrip}>
          Criar viagem
        </Button>
        <Button 
          color={"primary"} 
          variant="contained" 
          onClick={onClickSair}>
          Sair
        </Button>
      </ButtonsNav>
    </NavContainer>
  );
};