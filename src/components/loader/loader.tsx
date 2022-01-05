
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './loader.module.scss'

interface LoaderProps extends PropsWithChildren<any> {

    classNames?: string

    id: string
}

export function Loader({
    classNames  = '',
    id
}: LoaderProps): ReactElement {

    return (
      <div data-title=".dotPulse" role="alert" aria-busy="true">
        <div className={styles.stage}>
          <div className={styles.dotPulse}></div>
        </div>
      </div>
    )

}

Loader.displayName = 'Loader'
