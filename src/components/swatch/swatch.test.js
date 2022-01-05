import React from 'react';
import { render, screen } from '@testing-library/react'
import { Swatch } from './swatch'

describe("Swatch", () => {
  it("renders correctly", () => {
    render(<Swatch />)

    const swatch = screen.getByRole('img')
    expect(swatch).toBeTruthy()
  })
})
