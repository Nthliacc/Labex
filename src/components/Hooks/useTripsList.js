import { useEffect, useState } from "react";
import axios from "axios";

export const useTripsList = () =>{
    const [tripList, setTripList] = useState([]);
    
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips"
      )
      .then((response) => {
        setTripList(response.data.trips);
      })
  }, []);

  return tripList
}