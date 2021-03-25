import React from 'react'
import { SnackbarProviderWrapper } from './SnackbarContext'
import { BeersContextProvider } from './BeersContext'
import { BooksContextProvider } from './BooksContext'
import { WinesContextProvider } from './WinesContext'

interface ContextProvidersProps {
  children?: React.ReactNode
}

const ContextProviders = ({ children }: ContextProvidersProps) => (
  <SnackbarProviderWrapper>
    <BeersContextProvider year="2020">
      <BooksContextProvider year="2020">
        <WinesContextProvider year="2020">{children}</WinesContextProvider>
      </BooksContextProvider>
    </BeersContextProvider>
  </SnackbarProviderWrapper>
)

export default ContextProviders
