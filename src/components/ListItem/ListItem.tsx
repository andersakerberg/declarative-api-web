import React, { useCallback, useState } from 'react'
import {
  CircularProgress,
  Collapse,
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { useStyles } from './ListItem.styles'

interface ListItemProps extends MuiListItemProps {
  isLoading?: boolean
  icon?: React.ReactNode
  settings?: React.ReactNode
  action?: React.ReactNode
  hoverAction?: React.ReactNode
  label?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  isSelected?: boolean
  isExpanded?: boolean
  isNested?: boolean
  onClick?: (event: React.MouseEvent<any, any>) => void
}

const ListItem = ({
  isLoading,
  label,
  subtitle,
  icon,
  action,
  settings,
  children,
  hoverAction,
  isSelected,
  isExpanded,
  isNested,
  button,
  ...otherProps
}: ListItemProps) => {
  const classes = useStyles({ isNested })
  const [isHovered, setIsHovered] = useState(false)
  const shouldShowHoverAction = isHovered && hoverAction

  const handleOnMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [setIsHovered])

  const handleOnMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [setIsHovered])

  let endAction = null

  if (isLoading) {
    endAction = <CircularProgress color="primary" size={16} />
  } else if (shouldShowHoverAction) {
    endAction = hoverAction
  } else {
    endAction = action
  }

  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <MuiListItem
        className={classes.nested}
        selected={isSelected}
        {...otherProps}
        button={button as any}
        classes={{ selected: classes.selected, ...otherProps.classes }}
      >
        <ListItemIcon classes={{ root: classes.itemIcon }}>{icon}</ListItemIcon>
        {label && <ListItemText primary={label} />}
        {settings}
        {endAction && <ListItemSecondaryAction>{endAction}</ListItemSecondaryAction>}
      </MuiListItem>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </div>
  )
}

export default ListItem
