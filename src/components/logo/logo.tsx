import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './logo.module.scss'

interface LogoProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    inverse?: "inverse" | "primary"

    size?: "small" | "regular" | "large"
}

export function Logo({
    classNames  = '',
    inverse = "primary",
    size = 'regular',
    id,
    children
}: LogoProps): ReactElement {

    return (
      <span role="img" aria-label="logo" className={classnames(styles.logo, styles[inverse], styles[size], classNames)}></span>
    )

}

Logo.displayName = 'Logo'
