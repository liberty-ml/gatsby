import {MDCSlider} from '@material/slider';
import * as React from 'react'
import {PropsWithChildren, ReactElement} from 'react'
import classnames from 'classnames'
import './slider.module.scss'

interface SliderProps extends PropsWithChildren<any> {

    classNames?: string

    /**
     * onChange function that is triggered when the input is changed. Will pass up the onChange event.
     */
    onChange?: (
      event: ChangeEvent<any>
    ) => void

    id: string

    inverse: "inverse" | "primary"

    disabled: true | false

    size: "large" | "regular" | "small"

    min: integer

    max: integer

    value: integer
}

export function Slider({
    classNames  = '',
    onChange,
    id,
    inverse = "primary",
    disabled = false,
    size = "regular",
    min,
    max,
    value,
    children
}: SliderProps): ReactElement {
  const slider = new MDCSlider(document.querySelector('.mdc-slider'));

  return (
    <div class="mdc-slider">
      <input class="mdc-slider__input" type="range" min={min} max={max} value={value} name="volume" aria-label="Continuous slider demo" />
      <div class="mdc-slider__track">
        <div class="mdc-slider__track--inactive"></div>
        <div class="mdc-slider__track--active">
          <div class="mdc-slider__track--active_fill"></div>
        </div>
      </div>
      <div class="mdc-slider__thumb">
        <div class="mdc-slider__thumb-knob"></div>
      </div>
    </div>
  )
}

Slider.displayName = 'Slider'
