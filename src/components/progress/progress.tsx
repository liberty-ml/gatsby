
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './progress.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    counter: integer
}

export function Progress({
    classNames  = '',
    id,
    percentage = 0,
    size = 200
}: ProgressProps): ReactElement {


    return (
      <div style={{ width: size, height: size }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Colors
            pathColor: `rgba(164, 84, 246, ${100})`,
            textColor: 'rgb(164, 84, 246)'
          })}
        />
      </div>
    )

}

Progress.displayName = 'Progress'
