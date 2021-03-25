import React from 'react'
import { useStyles } from './EmptyState.styles'

interface EmptyStateProps {
  imgSrc?: string
  title?: React.ReactNode
  subTitle?: React.ReactNode
}
const EmptyState = ({ imgSrc, title, subTitle }: EmptyStateProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.subTitle}>{subTitle}</h3>
      <img src={imgSrc} alt="empty state" />
    </div>
  )
}

export default EmptyState
