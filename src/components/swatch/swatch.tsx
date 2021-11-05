import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import * as styles from './swatch.module.scss'

interface SwatchProps extends PropsWithChildren<any> {
    /**
     * Add custom classes to this element.
     */
    classNames?: string
}

export function Swatch({
    classNames  = '',
    children
}: SwatchProps): ReactElement {

   const mystyle = {
     width: '140px',
     height: '140px',
     marginRight: '25px',
     borderRadius: '12px',
     textAlign: 'center',
     fontSize: '1em',
     paddingTop: '40px'
   }

    return (
      <div className={classNames} style={mystyle}>
        {children}
      </div>
    )
}

Swatch.displayName = 'Swatch'
