import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { Dialog } from "./Dialog"

describe("Dialog", () => {

  it("renders correctly", async () => {
    render(<Dialog />)
    const button = document.querySelector('button')

    fireEvent.click(button);
    const modal = await screen.getByRole('dialog')
    expect(modal).toBeTruthy()
  })
})
