
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import { useState, useEffect } from "react";
import classnames from 'classnames'
import * as styles from './alert.module.scss'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

interface AlertProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    type: "success" | "danger" | "warning"

    showAlert: false

    text: string

    duration: number

    show: boolean

    showAlert: (hidden: boolean) => void;

}

export function Alert({
    classNames  = '',
    id,
    children,
    type,
    text,
    showAlert
}: AlertProps): ReactElement {

  useEffect(() => {
    const timer = setTimeout(() => {
      showAlert(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div aria-describedby="alertText" className={classnames('alert', `alert-${type}`, 'fade', 'show', styles.alert, classNames)} role="alert">
      <h4 id="alertText">{text}</h4>
    </div>
  )
}

Alert.displayName = 'Alert'
