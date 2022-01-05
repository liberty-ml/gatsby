import React from 'react';
import { render, screen } from '@testing-library/react'
import { TextInput } from "./textInput"

describe("Text Input", () => {

  it("renders correctly", () => {
    render(<TextInput />)

    const input = document.querySelector('input')
    expect(input).toBeTruthy()
  })
})
