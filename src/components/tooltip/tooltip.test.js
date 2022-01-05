import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { Tooltip } from "./tooltip"

describe("Tooltip", () => {

  it("renders correctly", () => {
    render(<Tooltip />)

    fireEvent.mouseOver(document.querySelector('span'));

    const tooltip = screen.getByRole('tooltip', { hidden: true })
    expect(tooltip).toBeTruthy()
  })
})
