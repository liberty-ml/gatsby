import React from 'react';
import { render, screen } from '@testing-library/react'
import { Switch } from './switch'

describe("Switch", () => {
  it("renders correctly", () => {
    render(<Switch />)

    const bang = screen.getByRole('switch')
    expect(bang).toBeTruthy()
  })
})
