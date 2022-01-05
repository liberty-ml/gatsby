import React from 'react';
import { render, screen } from '@testing-library/react'
import { CheckboxGroup } from './checkboxGroup'

describe("Checkbox", () => {
  it("renders correctly", () => {
    render(<CheckboxGroup />)

    const checkboxGroup = screen.getByRole('group')
    expect(checkboxGroup).toBeTruthy()
  })
})
