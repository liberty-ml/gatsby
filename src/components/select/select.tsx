import React from 'react'
import {InputProps} from './types'
import classnames from 'classnames'
import './select.module.scss'

export const Select = ({...props
                          }: React.InputHTMLAttributes<any>): React.ReactElement => {

  let menuOptions = []

  props.options.forEach(function(element, index) {
    menuOptions.push(<option key={index} value={element}>{element}</option>)
  })

  return (
    <div className="form-floating" role="listbox">
      <select className={classnames("form-select", props.classNames)} id="floatingSelect" aria-label="Floating label select example">
        <option defaultValue>Open this select menu</option>
        {menuOptions}
      </select>
      <label htmlFor="floatingSelect">Select input</label>
    </div>
  )
}

Select.displayName = 'Select'
