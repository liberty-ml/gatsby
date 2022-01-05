import * as React from 'react'
import {useState} from 'react';
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import * as styles from './tooltip.module.scss'
import ReactTooltip from "react-tooltip";

interface TooltipProps extends PropsWithChildren<any> {

    classNames?: string

    id: string

    inverse?: "inverse" | "primary"
}

export function Tooltip({
    classNames  = '',
    inverse = "primary",
    id,
    children
}: TooltipProps): ReactElement {

    return (

      <div>
        <span data-tip data-testid="trigger" data-for="registerTip" className={classnames(styles.dot, styles[inverse], classNames)}></span>

        <ReactTooltip id="registerTip" place="top" effect="solid" role="tooltip">
          {children}
        </ReactTooltip>
      </div>
    )

}

Tooltip.displayName = 'Tooltip'
