import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './checkboxGroup.module.scss'

interface CheckboxGroupProps extends PropsWithChildren<any> {

    classNames?: string
/*
    onChange?: (
      event: ChangeEvent<any>
    ) => void

    disabled: true | false

    id: string

    type: "radio" | "checkbox"

    name: string
  */
}

export function CheckboxGroup({
    classNames  = '',
    //name = '',
    //onChange,
    //disabled = false,
    //id,
    //type,
    children
}: CheckboxGroupProps): ReactElement {
    return (

      <fieldset className={classnames(classNames)} role="group">
        {children}
      </fieldset>
    )

}

CheckboxGroup.displayName = 'CheckboxGroup'
