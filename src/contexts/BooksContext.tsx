import { GetAllBooksResponse, useGetAllBooks } from 'generated/api'
import React, { createContext, FC } from 'react'
import GetContextTemplate from './GetContextTemplate'

const defaultState: GetAllBooksResponse = {
  books: [],
}

export const BooksContext = createContext<[GetAllBooksResponse, () => void]>([
  defaultState,
  () => {},
])

interface BooksContextProviderProps {
  year: string
}
export const BooksContextProvider: FC<BooksContextProviderProps> = ({ children, year }) => (
  <GetContextTemplate
    context={BooksContext}
    errorMessage="Unable to get Books"
    restfulGetHookReturn={useGetAllBooks({ year })}
  >
    {children}
  </GetContextTemplate>
)
