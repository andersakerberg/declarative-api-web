/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import ContextProviders from 'contexts/ContextProviders'
// eslint-disable-next-line import/order
import logo from './logo.svg'
import './App.css'
import { WinesContext } from 'contexts/WinesContext'
import { BeersContext } from 'contexts/BeersContext'
import { BooksContext } from 'contexts/BooksContext'
import Loader from 'components/Loader/Loader'
import { Grid, Typography } from '@material-ui/core'
import { envVars } from 'config/constants'
import { RestfulProvider } from 'restful-react'
import { useGetAllBeers } from 'generated/api'
import { All } from 'pages/all'

const App = () => (
  <RestfulProvider base={envVars.API_ENDPOINT}>
    <div className="App">
      <ContextProviders>
        <header className="App-header">
          <All />
        </header>
      </ContextProviders>
    </div>
  </RestfulProvider>
)

export default App
