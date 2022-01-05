import React from 'react';
import { render, screen } from '@testing-library/react'
import { Progress } from './progress'

describe("Progress", () => {
  it("renders correctly", () => {
    render(<Progress />)

    const progress = screen.getByRole('progressbar')
    expect(progress).toBeTruthy()
  })
})
