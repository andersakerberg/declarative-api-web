import React from 'react'
import { IconButton, Snackbar as MuiSnackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import useSnackbar, { OpenSnackbar } from 'hooks/useSnackbar'

export const SnackbarContext = React.createContext<OpenSnackbar>(() => {})

export const SnackbarProviderWrapper: React.FC = ({ children }) => {
  const [openSnackbar, closeSnackbar, toastMessage, isSnackbarOpen] = useSnackbar()

  return (
    <SnackbarContext.Provider value={openSnackbar}>
      <MuiSnackbar
        open={isSnackbarOpen}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={toastMessage}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      {children}
    </SnackbarContext.Provider>
  )
}
