
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './aside.module.scss'

interface AsideProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    header: string
}

export function Aside({
    classNames  = '',
    id,
    header,
    children
}: AsideProps): ReactElement {

    return (
      <div className={styles.aside}>
        <h4>{header}</h4>
        <p>{children}</p>
      </div>
    )

}

Aside.displayName = 'Aside'
