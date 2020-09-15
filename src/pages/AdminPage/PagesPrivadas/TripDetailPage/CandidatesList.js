import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { List } from '@material-ui/core';
import {CandidateItem} from './CandidateItem';

export const CandidatesList = (props) => {
    return (
        <Card>
        <CardContent>
            <h5>Lista de candidatos </h5>
          <List>
            {props.candidates.map(candidate => {
              return <CandidateItem candidate={candidate} decideCandidate={props.decideCandidate}/>
            })}
          </List>
        </CardContent>
      </Card>
    );
};