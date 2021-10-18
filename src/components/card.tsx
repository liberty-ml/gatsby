
import * as React from 'react'
import { Link } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './card.module.scss'

interface CardProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    header: string

    link: string
}

export function Card({
    classNames  = '',
    id,
    header,
    link,
    children
}: CardProps): ReactElement {

    return (
     <Link to={link}>
        <div className={styles.card}>
          <h4>{header}</h4>
          <p>{children}</p>
        </div>
      </Link>
    )

}

Card.displayName = 'Card'
