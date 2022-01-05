import React, {useState} from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './dialog.module.scss'
import 'jquery/dist/jquery.min.js'
import { Modal } from 'react-bootstrap';
import { SvrnButton } from "../svrnButton/svrnButton"

interface DialogProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    confirmText: string

    launchText: string

    heading: string

    inverse: "inverse" | "primary"
}

export function Dialog({
    classNames  = '',
    id,
    children,
    confirmText,
    launchText,
    launchColor,
    heading,
    inverse = "primary"
}: DialogProps): ReactElement {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SvrnButton inverse={"primary"} onClick={handleShow}>
        {launchText}
      </SvrnButton>

      <Modal show={show} onHide={handleClose} aria-labelledby="dialog_label" className={classnames(styles.dialogModal)}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title id="dialog_label">{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{children}</p></Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <SvrnButton size="small" inverse={"gray"} onClick={handleClose}>
            Close
          </SvrnButton>
          <SvrnButton size="small" inverse={"primary"} onClick={handleClose}>
            Delete
          </SvrnButton>
        </Modal.Footer>
      </Modal>
    </>
  )

}

Dialog.displayName = 'Dialog'
