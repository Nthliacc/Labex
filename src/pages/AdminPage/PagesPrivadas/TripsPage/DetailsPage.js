import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { Button } from "@material-ui/core";
import {
    RequestCard,
    InformacoesCard,
    PCard,
    ButtonsCard
} from "../../../styled";

export const DetailsPage = (props) => {
    return (
        <RequestCard>
            <InformacoesCard>
                <PCard><b>{props.name}</b>, {props.age} anos - {props.profession}</PCard>
                <PCard>{props.text}</PCard>
            </InformacoesCard>
            <ButtonsCard>
                <Button
                    variant="contained"
                    color={"secondary"}
                    onClick={props.onClickRequest}
                    value={true}>
                    <DoneIcon />
                </Button>
                <Button
                    variant="contained"
                    color={"secondary"}
                    value={false}
                    onClick={props.onClickRequest}>
                    <CloseIcon color="error"/>
                </Button>
            </ButtonsCard>
        </RequestCard>
    );
};