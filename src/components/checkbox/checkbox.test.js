import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { Checkbox } from './checkbox'
import '@testing-library/jest-dom'

describe("Checkbox", () => {
  it("renders correctly", () => {
    render(<Checkbox type="checkbox">Option</Checkbox>)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeTruthy()
  })

  it("handles change event accessibly", () => {
    render(<Checkbox type="checkbox" checked={false}>Option</Checkbox>)

    const cbEl = screen.getByTestId("cb");
    expect(cbEl).not.toBeChecked();
    expect(cbEl.getAttribute("aria-checked")).toBe("false");

    fireEvent.click(cbEl);

    expect(cbEl).toBeChecked();
    expect(cbEl.getAttribute("aria-checked")).toBe("true");
  })
})
