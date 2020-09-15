import React from 'react'
import { Typography } from '@material-ui/core'

export const TripInfoItem = (props) => {
  return <Typography variant={'body1'}>
    <strong>{props.infoName}</strong>: {props.info}
  </Typography>
};