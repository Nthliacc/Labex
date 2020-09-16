import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { LogoutPage } from "../../pages/LogoutPage";
import { HomePage } from "../../pages/HomePage";
import { AdminPage } from "../../pages/AdminPage/AdminPage";
import { InscricaoPage } from "../../pages/InscricaoPage";
import { CreateTripsPage } from "../../pages/AdminPage/PagesPrivadas/CreateTripsPage";

export const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/create-trip" >
          <CreateTripsPage/>
        </Route>
        <Route exact path="/inscricao" >
          <InscricaoPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/my-trips">
          <AdminPage key={AdminPage}/>
        </Route>
        <Route exact path="/out">
          <LogoutPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
