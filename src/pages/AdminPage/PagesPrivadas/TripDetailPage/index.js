import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {TripInfoCard} from './TripInfoCard';
import { CandidatesList } from './CandidatesList';
import { ContentContainer } from './styled';
import { useProtectedPage } from '../../../../components/Hooks/useProtectedPage';

export const TripDetailPage = () => {
  const [trip, setTrip] = useState();
  console.log(trip)
  const params = useParams();
  useProtectedPage();

  const getTripDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/trip/${params.tripId}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) => {
      setTrip(response.data.trip)
    })
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    })
  }

  return <div>
    <h2>Detalhes da viagem</h2>
    {trip ? <ContentContainer>
      <TripInfoCard info={trip}/>
      <CandidatesList 
        candidates={trip.candidates} 
        decideCandidate={decideCandidate}
      />
    </ContentContainer> : <div>Carregando...</div>}
  </div>
};