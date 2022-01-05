import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './staticImg.module.scss'
import { StaticImage } from "gatsby-plugin-image"

interface StaticImgProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    alt: string

    src: string
}

export function StaticImg({
  classNames,
  id,
  alt,
  src,
  children
}: StaticImgProps): ReactElement {

  return <StaticImage src="../../images/headshot.jpg" alt="A dinosaur" />
}

StaticImg.displayName = 'StaticImg'
