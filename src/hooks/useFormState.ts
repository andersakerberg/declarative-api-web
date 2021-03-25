import { useReducer, useCallback } from 'react'
import set from 'lodash/set'
import cloneDeep from 'lodash/cloneDeep'

export type FormStateActionType = {
  type: 'set' | 'reset'
  id?: string | number
  value?: string | boolean
  values?: { [key: string]: string | boolean }
}

function reducer<T>(state: T, action: FormStateActionType) {
  switch (action.type) {
    case 'reset':
      return action.values
    case 'set':
      // use lodash to allow the use of full key path's, e.g. contactMethods.0.value
      return set<any>(cloneDeep(state), action.id!, action.value!)
    default:
      return state
  }
}

export type OnChangeFn = (event: React.ChangeEvent<HTMLInputElement>) => void
type SetStateFn<S> = (state: S) => void
type UseFormState<S> = [S, OnChangeFn, SetStateFn<S>]

function useFormState<T>(initialData: T): UseFormState<T> {
  const [state, dispatch] = useReducer(
    (_state: T, _action: FormStateActionType) => reducer<T>(_state, _action),
    initialData
  )

  const onChangeCb = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, object?: any) => {
      const { type, id, checked, value } = event.target
      dispatch({
        type: 'set',
        id: id || object?.props.id,
        value: type === 'checkbox' ? checked : value,
      })
    },
    [dispatch]
  )

  const setState: SetStateFn<T> = useCallback(
    (newState) => {
      dispatch({ type: 'reset', values: (newState as unknown) as FormStateActionType['values'] })
    },
    [dispatch]
  )

  return [state, onChangeCb, setState]
}

export default useFormState
