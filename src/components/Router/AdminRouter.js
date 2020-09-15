import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { NavAdmin } from "../../pages/AdminPage/NavAdmin";
import { CreateTripsPage } from "../../pages/AdminPage/PagesPrivadas/CreateTripsPage";
import { TripDetailPage } from "../../pages/AdminPage/PagesPrivadas/TripDetailPage";
import { TripsPage } from "../../pages/AdminPage/PagesPrivadas/TripsPage";
import { LogoutPage } from "../../pages/LogoutPage";
import { RouterContainer } from "../../pages/styled";

export const AdminRouter = () => {
  return (
    <BrowserRouter key={AdminRouter}>
      <NavAdmin key={NavAdmin}/>
      <RouterContainer>
        <Switch>
          <Route exact path="/my-trips">
            <TripsPage />
          </Route>
          <Route exact path="/create-trip" >
            <CreateTripsPage/>
          </Route>
          <Route path="/viagens/detalhe/:tripId">
            <TripDetailPage/>
          </Route>
          <Route exact path="/out">
            <LogoutPage />
          </Route>
        </Switch>
      </RouterContainer>
      </BrowserRouter>
  );
};
