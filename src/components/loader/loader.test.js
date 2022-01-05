import React from 'react';
import { render, screen } from '@testing-library/react'
import { Loader } from './loader'

describe("Loader", () => {
  it("renders correctly", () => {
    render(<Loader />)

    const loader = screen.getByRole('alert')
    expect(loader).toBeTruthy()
  })
})
