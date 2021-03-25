import { makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles<Theme, { autoHeight?: boolean }>(() => ({
  cardContent: {
    minHeight: ({ autoHeight }) => (autoHeight ? 'initial' : '70vh'),
  },
  avatar: {
    backgroundColor: '#BDBDCC',
  },
}))
