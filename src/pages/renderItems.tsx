/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/react-in-jsx-scope */
import { Grid, Typography, Paper, makeStyles, IconButton } from '@material-ui/core'
import { GrCopy } from 'react-icons/gr'
import { LocalDrink, LocalBar, MenuBook } from '@material-ui/icons'
import CopyToClipboard from 'components/Clip/CopyToClipboard'
import { emphasize } from '@material-ui/core/styles/colorManipulator'

interface RenderItemsProps {
  headerText: string
  items: any[]
}

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontSize: 45,
    display: 'inline-flex',
    alignItems: 'center',
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bolder',
    color: '#257d3b',
    backgroundColor: '#000',
    marginLeft: 20,
    marginRight: 20,
  },
  topRightButton: {
    backgroundColor: '#c0c2c4',
    color: 'gray',
    padding: 8,
    overflow: 'visible',
    borderRadius: '19%',
    float: 'right',
    '&:hover, &:focus': {
      // @ts-ignore
      backgroundColor: emphasize('#c0c2c4', 0.38),
    },
    '&:active': {
      // @ts-ignore
      backgroundColor: emphasize('#c0c2c4', 0.42),
    },
  },
}))

const getIconToUse = (header: string) => {
  switch (header.toLowerCase()) {
    case 'books':
      return <MenuBook htmlColor="#1a9130" style={{ fontSize: 40 }} />
    case 'wines':
      return <LocalBar htmlColor="#a81f07" style={{ fontSize: 40 }} />
    case 'beers':
      return <LocalDrink htmlColor="#e7eb13" style={{ fontSize: 40 }} />
    default:
      return <LocalDrink style={{ fontSize: 40 }} />
  }
}

export const RenderItems = ({ headerText, items }: RenderItemsProps) => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.headerText}>
          {getIconToUse(headerText)} {headerText}
        </Typography>
      </Grid>
      {items.slice(0, 5).map((book) => (
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <CopyToClipboard>
              {({ copy }) => (
                <IconButton
                  className={classes.topRightButton}
                  onClick={() => copy(JSON.stringify(book, null, 2))}
                >
                  <GrCopy />
                </IconButton>
              )}
            </CopyToClipboard>
            <pre>{JSON.stringify(book, null, 2)}</pre>
          </Paper>
        </Grid>
      ))}
    </>
  )
}
