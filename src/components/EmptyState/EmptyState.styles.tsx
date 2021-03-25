import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#9A99A0',

    '& img': {
      marginTop: 40,
      width: 130,
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '25px',
    margin: 0,
  },
  subTitle: {
    fontSize: '13px',
    lineHeight: '15px',
  },
}))
