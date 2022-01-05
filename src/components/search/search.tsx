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

    onChange?: (
      event: ChangeEvent<any>
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

      <form className={classnames(styles.searchContainer, styles[value], classNames)} role="search">
        <input className={styles.search} onFocus={() => setValue('focused')} onBlur={() => setValue('blurred')} placeholder="Enter search query" onChange={(e) => onChange(e.target)} />
        <SvrnButton inverse={inverse}>Search</SvrnButton>
      </form>
    )

}

Search.displayName = 'Search'
