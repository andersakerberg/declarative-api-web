import React from 'react'
import { Avatar, Card, CardContent, CardHeader, Divider } from '@material-ui/core'
import { useStyles } from './BoxContainer.styles'

export interface BoxContainerProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  action?: React.ReactNode
  title?: string
  autoHeight?: boolean
}

const BoxContainer = ({ children, icon, action, title, autoHeight }: BoxContainerProps) => {
  const classes = useStyles({ autoHeight })

  return (
    <Card elevation={0}>
      <CardHeader
        avatar={
          <Avatar aria-label="icon" className={classes.avatar}>
            {icon}
          </Avatar>
        }
        action={action}
        title={title}
      />
      <Divider variant="middle" />
      <CardContent classes={{ root: classes.cardContent }}>{children}</CardContent>
    </Card>
  )
}

export default BoxContainer
