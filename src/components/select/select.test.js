import React from 'react';
import { render, screen } from '@testing-library/react'
import { Select } from './select'

describe("Select", () => {
  it("renders correctly", () => {
    render(<Select options={["one", "two", "three"]}/>)

    const select = screen.getByRole('listbox')
    expect(select).toBeTruthy()
  })
})
