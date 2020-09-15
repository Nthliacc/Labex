import React from "react";
import { RequestContainer } from "../../../styled";
import { useTripsList } from "../../../../components/Hooks/useTripsList";
import { List, ListItem, ListItemText } from "@material-ui/core";
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import { Link } from 'react-router-dom';

export const TripsPage = () => {
  const tripsList = useTripsList();

  return (
    <RequestContainer>
      <h1>Viagens</h1>
      <List>
          {tripsList.map((trip) => {
            return <Link to={`/viagens/detalhe/${trip.id}`}>
              <ListItem button>
                <PublicOutlinedIcon/>
                <ListItemText primary={trip.name}/>
              </ListItem>        
            </Link>
          })}
      </List>
    </RequestContainer>
  );
};