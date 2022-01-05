import React from 'react';
import { render, screen } from '@testing-library/react'
import {within} from '@testing-library/dom'
import { Aside } from "./aside"

describe("Aside", () => {

  it("renders correctly", () => {
    render(<Aside />)

    const aside = screen.getByRole('complementary')
    expect(aside).toBeTruthy()
  })

  it("has aria label", () => {
    render(<Aside header="Hello world" label="sidebar">I SAID GOOD DAY SIR!</Aside>)

    const aside = screen.getByRole('complementary')
    expect(aside.getAttribute("aria-label")).not.toBeNull()

  })
})
