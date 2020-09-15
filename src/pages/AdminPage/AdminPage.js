import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AdminContainer } from "../styled";
import { AdminRouter } from "../../components/Router/AdminRouter";

export const AdminPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
      if (token === null) {
        history.push("/");
      }
  }, [history]);

  return (
    <AdminContainer key={AdminPage}>
      <AdminRouter />
    </AdminContainer>
  );
};