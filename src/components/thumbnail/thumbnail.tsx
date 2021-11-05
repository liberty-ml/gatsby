import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './thumbnail.module.scss'
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip";

interface ThumbnailProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    rel: string

    src: string
}

export function Thumbnail({
  classNames,
  id,
  targetId,
  rel,
  src,
  link = '/#',
  children
}: ThumbnailProps): ReactElement {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  return (
    <div>
      <Link data-tip data-for={targetId} id={id} className={classnames(classNames)} to={link}>
        <Img fixed={data.file.childImageSharp.fixed} rel={rel} />
      </Link>

      <ReactTooltip id={targetId} place="bottom" effect="solid">
        {children}
      </ReactTooltip>
    </div>


  )
}

Thumbnail.displayName = 'Thumbnail'
