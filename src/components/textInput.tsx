import React from 'react'
import {InputProps} from './types'
import classnames from 'classnames'
import './textInput.module.scss'

export const TextInput = ({...props
                          }: React.InputHTMLAttributes<any>): React.ReactElement => {
  return (
    <div className={classnames("form-floating mb-3", props.className)}>
      <input type={props.inputType} className="form-control" id="floatingInput" placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
      <label htmlFor="floatingInput">{props.label}</label>
    </div>
  )
}

TextInput.displayName = 'TextInput'
