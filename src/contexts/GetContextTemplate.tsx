import React, { FC, useCallback, useContext, useEffect } from 'react'
import { UseGetReturn } from 'restful-react'
import { SnackbarContext } from './SnackbarContext'

interface ContextProviderProps {
  errorMessage?: string
  context: React.Context<any>
  restfulGetHookReturn: UseGetReturn<any, any, void, unknown>
}
const GetContextTemplate: FC<ContextProviderProps> = ({
  children,
  errorMessage,
  context: Context,
  restfulGetHookReturn,
}) => {
  const setToastMessage = useContext(SnackbarContext)
  const { data, refetch, error } = restfulGetHookReturn

  const fetch = useCallback(() => {
    refetch()
  }, [refetch, setToastMessage])

  useEffect(() => {
    if (error?.message && errorMessage) {
      setToastMessage(errorMessage)
    }
  }, [error?.message, errorMessage])

  return <Context.Provider value={[data, fetch]}>{children}</Context.Provider>
}

export default GetContextTemplate
