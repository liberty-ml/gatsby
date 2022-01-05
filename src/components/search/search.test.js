import React from 'react';
import { render, screen } from '@testing-library/react'
import { Search } from './search'

describe("Search", () => {
  it("renders correctly", () => {
    render(<Search />)

    const search = screen.getByRole('search')
    expect(search).toBeTruthy()
  })
})
