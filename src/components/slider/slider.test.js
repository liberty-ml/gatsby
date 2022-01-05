import React from 'react';
import { render, screen } from '@testing-library/react'
import { Slider } from './slider'

describe("Slider", () => {
  it("renders correctly", () => {
    render(<Slider />)

    const slider = screen.getByRole('slider')
    expect(slider).toBeTruthy()
  })
})
