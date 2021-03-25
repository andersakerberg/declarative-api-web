import { useGetAllWines, GetAllWinesResponse } from 'generated/api'
import React, { createContext, FC } from 'react'
import GetContextTemplate from './GetContextTemplate'

const defaultState: GetAllWinesResponse = {
  wines: [],
}

export const WinesContext = createContext<[GetAllWinesResponse, () => void]>([
  defaultState,
  () => {},
])

interface WinesContextProviderProps {
  year: string
}
export const WinesContextProvider: FC<WinesContextProviderProps> = ({ children, year }) => (
  <GetContextTemplate
    context={WinesContext}
    errorMessage="Unable to get Wines"
    restfulGetHookReturn={useGetAllWines({ year })}
  >
    {children}
  </GetContextTemplate>
)
