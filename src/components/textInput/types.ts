import React, {ChangeEvent} from 'react'

export type ValidationObject = {valid: boolean; name: string}

export interface InputProps {
  /**
   * unique ID for inputs
   */
  id: string,
  /**
   * additional classNames
   */
  className?: string
  /**
   * onChange function that is triggered when the input is changed. Will pass up the onChange event.
   */
  onChange?: (
    event: ChangeEvent<any>
  ) => void
  /**
   * onBlur function that is triggered when the input is focused. Will pass up the onBlur event.
   */
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement>
  ) => void
  /**
    Input field type
  */
  inputType?: "text" | "password" | "datetime" | "datetime-local" | "date" | "month" | "time" | "week" | "number" | "email" | "url" | "search" | "tel" | "color"
}
