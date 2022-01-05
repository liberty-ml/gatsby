import React from 'react';
import { render, screen } from '@testing-library/react'
import { Logo } from './logo'

describe("Logo", () => {
  it("renders correctly", () => {
    render(<Logo />)

    const logo = screen.getByRole('img')
    expect(logo).toBeTruthy()
  })
})
