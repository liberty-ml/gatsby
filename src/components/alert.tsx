
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './alert.module.scss'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

interface AlertProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    type?: "success" | "danger" | "warning"
}

export function Alert({
    classNames  = '',
    type = "success",
    id,
    children
}: AlertProps): ReactElement {

  return (

    <div className={classnames('alert', 'alert-dismissible', `alert-${type}`, 'fade', 'show', classNames)} role="alert">
      {children}
      <button type="button" className={classnames(styles.btnClose, 'btn-close')} data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )

}

Alert.displayName = 'Alert'
