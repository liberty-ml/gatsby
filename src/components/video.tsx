import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './video.module.scss'
import ReactPlayer from 'react-player'

interface VideoProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    code: string
}

export function Video({
  classNames,
  id,
  url
}: VideoProps): ReactElement {

  return (
    <div className={classnames(styles.videoContainer, classNames)}>
      <ReactPlayer url={url} />
    </div>
  )
}

Video.displayName = 'Video'
