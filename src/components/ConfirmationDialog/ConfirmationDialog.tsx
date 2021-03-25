import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css'

export const ConfirmDialog = (title: string, message: string, postFunction: any) => {
  confirmAlert({
    customUI: ({ onClose }) => (
      <>
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open>
          <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <Typography>{message}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} variant="contained" color="secondary">
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.stopPropagation()
                postFunction()
                onClose()
              }}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    ),
  })
}
