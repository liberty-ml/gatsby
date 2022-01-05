import React from 'react';
import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeTruthy()
  })
})
