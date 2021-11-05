import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import Button from "@material-ui/core/Button"
import * as styles from './svrnButton.module.scss'

interface SvrnButtonProps extends PropsWithChildren<any> {

    classNames?: string

    onClick?: (
      event: ClickEvent<any>
    ) => void

    variant: "text" | "contained" | "outlined"

    id: string

    inverse: "inverse" | "primary"

    disabled: true | false

    size: "large" | "regular" | "small"
}

export function SvrnButton({
    classNames  = '',
    onClick,
    variant = 'contained',
    id,
    inverse = "primary",
    disabled = false,
    size = "regular",
    children
}: SvrnButtonProps): ReactElement {
  return (
    <Button className={classnames(styles[size], styles[inverse], styles[variant], classNames)} variant={variant} id={id} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}
