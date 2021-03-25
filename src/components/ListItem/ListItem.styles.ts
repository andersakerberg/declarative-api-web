import { makeStyles, Theme } from '@material-ui/core'

interface StyleProps {
  isNested?: boolean
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  nested: ({ isNested }) => ({
    paddingLeft: isNested ? theme.spacing(4) : theme.spacing(2),
  }),
  itemIcon: {
    minWidth: 36,
  },
  selected: {
    backgroundColor: 'transparent !important',
    '& div': {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
  },
}))
