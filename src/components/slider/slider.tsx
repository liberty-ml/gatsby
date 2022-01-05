import {MDCSlider} from '@material/slider';
import React, { useEffect, useRef } from 'react';
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
    min = 0,
    max = 100,
    value,
    children
}: SliderProps): ReactElement {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = new MDCSlider(sliderRef.current);
    slider.on = true;
  }, []);

  return (
    <div className="mdc-slider" ref={sliderRef}>
      <input className="mdc-slider__input" type="range" min={min} max={max} value={value} name="volume" aria-label="Continuous slider demo" role="slider" onChange={(e) => onChange(e.target)} />
      <div className="mdc-slider__track">
        <div className="mdc-slider__track--inactive"></div>
        <div className="mdc-slider__track--active">
          <div className="mdc-slider__track--active_fill"></div>
        </div>
      </div>
      <div className="mdc-slider__thumb">
        <div className="mdc-slider__thumb-knob"></div>
      </div>
    </div>
  )
}

Slider.displayName = 'Slider'
