import * as React from 'react'
import {useState} from 'react';
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './search.module.scss'
import { SvrnButton } from '../svrnButton/svrnButton'

interface SearchProps extends PropsWithChildren<any> {

    classNames?: string

    onFocus?: (
      event: FocusEvent<any>
    ) => void

    id: string

    inverse?: "inverse" | "primary"
}

export function Search({
    classNames  = '',
    onFocus,
    inverse = "primary",
    id
}: SearchProps): ReactElement {

    const [value, setValue] = useState('blurred');

    return (

      <div className={classnames(styles.searchContainer, styles[value], classNames)}>
        <input className={styles.search} onFocus={() => setValue('focused')} onBlur={() => setValue('blurred')} placeholder="Enter search query" />
        <SvrnButton inverse={inverse}>Search</SvrnButton>
      </div>
    )

}

Search.displayName = 'Search'
