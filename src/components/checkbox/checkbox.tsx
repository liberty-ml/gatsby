import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './checkbox.module.scss'

interface CheckboxProps extends PropsWithChildren<any> {

    classNames?: string

    onChange?: (
      event: ChangeEvent<any>
    ) => void

    disabled: true | false

    id: string

    type: "radio" | "checkbox"

    name: string
}

export function Checkbox({
    classNames  = '',
    name = '',
    onChange,
    disabled = false,
    id,
    type,
    children
}: CheckboxProps): ReactElement {

    function camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }

    return (

      <div className={classnames(styles.formCheck, "form-check", classNames)}>
        <input className={classnames(styles.formCheckInput, "form-check-input")} type={type} name={name} value={camelize(children)} id={camelize(children)} disabled={disabled} onChange={(e) => onChange(e.target)} />
        <label className={classnames(styles.formCheckLabel, "form-check-label")} htmlFor={camelize(children)}>
          {children}
        </label>
      </div>
    )

}

Checkbox.displayName = 'Checkbox'
