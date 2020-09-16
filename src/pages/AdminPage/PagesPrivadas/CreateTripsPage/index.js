import React, { useState } from "react";
import {
  CreateTripsContainer,
  FormCriarViagem,
  ButtonCriarViagem,
  InputCriarViagem,
} from "../../../styled";
import axios from "axios";
import { useForm } from "../../../../components/Hooks";
import { useProtectedPage } from "../../../../components/Hooks/useProtectedPage";
import { KeyboardDatePicker } from "@material-ui/pickers";

export const CreateTripsPage = () => {
  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  useProtectedPage();

  const [date, setDate] = useState(new Date());

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips",
        body,
        {
          headers: {
            auth: window.localStorage.getItem('token')
          }
        }
      ).then((resposta) => {
        alert(`Sua Viagem ${form.nome}, foi criada com sucesso!`);
      })
      .catch((error) => {
        alert("Erro");
        console.log("Deu erro", error);
      });
  };

  return (
    <CreateTripsContainer>
      <FormCriarViagem onSubmit={onSubmitForm}>
        <h2>Create Trips Page</h2>
        <InputCriarViagem
          name={'name'}
          value={form['name']}
          label={"Nome"}
          onChange={onChange}
          required={true}
        />
        <InputCriarViagem select
          value={form['planet']}
          name={"planet"}
          label={"Planeta"}
          onChange={onChange}
          required={true}>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Júpiter"}>Júpiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Neturno"}>Neturno</option>
        </InputCriarViagem>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Data"
          value={date}
          onChange={date => setDate(date)} />
        <InputCriarViagem
          value={form['durationInDays']}
          name={"durationInDays"}
          type={"number"}
          InputProps={{
            pattern: "[A-Za-z ]{50,}",
            title: "A duração deve conter no mínimo 50 dias"
          }}
          label={"Duração em dias"}
          onChange={onChange}
          required={true}
        />
        <InputCriarViagem
          value={form['description']}
          name={"description"}
          type={"text"}
          InputProps={{
            pattern: "[A-Za-z ]{30,}",
            title: "A descrição deve conter 30 letras no mínimo"
          }}
          label={"Descrição"}
          onChange={onChange}
          required={true} />
        <ButtonCriarViagem
          variant="contained"
          color={"primary"}
          type={'submit'}
        >
          Criar Viagem
        </ButtonCriarViagem>
      </FormCriarViagem>
    </CreateTripsContainer>
  );
};