
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './aside.module.scss'

interface AsideProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    header: string

    label: label
}

export function Aside({
    classNames  = '',
    id,
    header,
    label,
    children
}: AsideProps): ReactElement {

    return (
      <aside className={styles.aside} role="complementary" aria-label={label}>
        <h4 data-testid="header">{header}</h4>
        <p>{children}</p>
      </aside>
    )

}

Aside.displayName = 'Aside'
