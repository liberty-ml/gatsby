import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import * as styles from './swatch.module.scss'

interface SwatchProps extends PropsWithChildren<any> {
    /**
     * Add custom classes to this element.
     */
    classNames?: string

    /**
     * Assistive label for color description.
     */
    label?: string
}

export function Swatch({
    classNames  = '',
    label,
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
      <div className={classNames} style={mystyle} role="img" aria-label={label}>
        {children}
      </div>
    )
}

Swatch.displayName = 'Swatch'
