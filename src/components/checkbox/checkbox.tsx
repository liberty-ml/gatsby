import React, {useState} from 'react'
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

    checked: boolean
}

export function Checkbox({
    classNames  = '',
    name = '',
    onChange,
    disabled = false,
    id,
    type,
    checked = false,
    children
}: CheckboxProps): ReactElement {
  const [state, setState] = useState({
    checked: checked
  })

  let self = this

    const toggle = (
          event: React.ChangeEvent<HTMLSelectElement>
      ): void => {
        setState({
          checked: !state.checked
        })
    }

    function camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }

    return (

      <div className={classnames(styles.formCheck, "form-check", classNames)}>
        <input data-testid="cb" className={classnames(styles.formCheckInput, "form-check-input")} checked={state.checked} aria-checked={state.checked} type={type} role={type} name={name} value={camelize(children)} id={camelize(children)} disabled={disabled} onChange={toggle} />
        <label className={classnames(styles.formCheckLabel, "form-check-label")} htmlFor={camelize(children)}>
          {children}
        </label>
      </div>
    )
}


Checkbox.displayName = 'Checkbox'
