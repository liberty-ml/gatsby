import React from 'react';
import { render, screen } from '@testing-library/react'
import { SvrnButton } from "./svrnButton"

describe("SvrnButton", () => {

  it("renders correctly", () => {
    render(<SvrnButton />)

    const button = document.querySelector('button')
    expect(button).toBeTruthy()
  })
})
