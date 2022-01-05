
import React, { MouseEvent, useRef } from 'react';
import { Link } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './card.module.scss'
import { navigate } from 'gatsby';

interface CardProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    header: string

    link: string
}

export function Card({
    classNames  = '',
    id,
    header,
    link,
    children
}: CardProps): ReactElement {
  let down, up
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const mouseDownHandler = (e: MouseEvent): void => {
    e.preventDefault();
    down = +new Date();
  }

  const mouseUpHandler = (e: MouseEvent): void => {
    e.preventDefault();
    up = +new Date();
    if ((up - down) < 200) {
      navigate(link)
    }
  }

  return (
    <li data-testid="mainCard" role="listItem" className={classnames(styles.card, "card", styles[classNames])} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
      <div className={styles.text}>
        <h4><Link to={link} data-testid="cardLink">{header}</Link></h4>
        <p>{children}</p>
      </div>
    </li>
  )
}

Card.displayName = 'Card'

//<Link to={link}>
