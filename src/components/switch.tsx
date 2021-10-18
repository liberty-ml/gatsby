import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './switch.module.scss'

interface SwitchProps extends PropsWithChildren<any> {

    classNames?: string

    onChange?: (
      event: ChangeEvent<any>
    ) => void

    disabled: true | false

    checked: true | false

    id: string
}

export function Switch({
    classNames  = '',
    onChange,
    disabled = false,
    checked = false,
    id,
    children
}: SwitchProps): ReactElement {

    return (

      <div className={classnames(styles.formSwitch, "form-check form-switch", classNames)}>
        <label className={classnames(styles.formCheckLabel, "form-check-label")} htmlFor="flexSwitchCheckDefault">OPTIUON</label>
        <input className={classnames(styles.formCheckInput, "form-check-input")} type="checkbox" id="flexSwitchCheckDefault" />
        <label className={classnames(styles.formCheckLabel, "form-check-label")} htmlFor="flexSwitchCheckDefault">Option 2</label>
      </div>
    )

}

Switch.displayName = 'Switch'
