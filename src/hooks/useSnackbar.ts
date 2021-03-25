import { useCallback, useRef, useState } from 'react'

export type OpenSnackbar = (text: string, timeout?: number) => void
export type CloseSnackbar = () => void

/**
 * useSnackbar hook
 * @param {number} defaultTimeout set default timeout (ms) for Snackbar to close. Default 3000. Use 0 to keep it open.
 */
const useSnackbar = (defaultTimeout = 3000): [OpenSnackbar, CloseSnackbar, string, boolean] => {
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const closeSnackbarTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  /**
   * Close Snackbar
   */
  const closeSnackbar: CloseSnackbar = useCallback(() => {
    setIsSnackbarOpen(false)
    if (closeSnackbarTimeoutRef.current) {
      clearTimeout(closeSnackbarTimeoutRef.current)
    }
  }, [setIsSnackbarOpen])

  /**
   * Open Snackbar with text
   * @param {string} text text to display
   * @param {string} timeout close Snackbar after ms. Set to 0 if it should stay open
   */
  const openSnackbar: OpenSnackbar = useCallback(
    (text, timeout = defaultTimeout) => {
      setSnackbarMessage(text)
      setIsSnackbarOpen(true)
      if (closeSnackbarTimeoutRef.current) {
        clearTimeout(closeSnackbarTimeoutRef.current)
      }
      if (timeout > 0) {
        closeSnackbarTimeoutRef.current = setTimeout(closeSnackbar, timeout)
      }
    },
    [setSnackbarMessage, setIsSnackbarOpen, closeSnackbar, defaultTimeout]
  )

  return [openSnackbar, closeSnackbar, snackbarMessage, isSnackbarOpen]
}

export default useSnackbar
