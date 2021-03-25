import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
}))

export default function Loader() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}
