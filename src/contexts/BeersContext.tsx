import { GetAllBeersResponse, useGetAllBeers } from 'generated/api'
import React, { createContext, FC } from 'react'
import GetContextTemplate from './GetContextTemplate'

const defaultState: GetAllBeersResponse = {
  beers: [],
}

export const BeersContext = createContext<[GetAllBeersResponse, () => void]>([
  defaultState,
  () => {},
])

interface BeersContextProviderProps {
  year: string
}
export const BeersContextProvider: FC<BeersContextProviderProps> = ({ children, year }) => (
  <GetContextTemplate
    context={BeersContext}
    errorMessage="Unable to get Beers"
    restfulGetHookReturn={useGetAllBeers({ year })}
  >
    {children}
  </GetContextTemplate>
)
