/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { WinesContext } from 'contexts/WinesContext'
import { BeersContext } from 'contexts/BeersContext'
import { BooksContext } from 'contexts/BooksContext'
import Loader from 'components/Loader/Loader'
import { Grid, makeStyles } from '@material-ui/core'

import { RenderItems } from './renderItems'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    fontSize: 34,
    padding: 10,
    margin: 10,
  },
}))

export const All = () => {
  const [wineContext] = useContext(WinesContext)
  const [beerContext] = useContext(BeersContext)
  const [bookContext] = useContext(BooksContext)

  const classes = useStyles()

  if (wineContext?.wines && beerContext?.beers && bookContext?.books) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <RenderItems headerText="Wines" items={wineContext?.wines?.slice(0, 5)} />
          <RenderItems headerText="Beers" items={beerContext?.beers?.slice(0, 5)} />
          <RenderItems headerText="Books" items={bookContext?.books?.slice(0, 5)} />
        </Grid>
      </div>
    )
  }
  return <Loader />
}
