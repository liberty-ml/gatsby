import React from 'react';
import { render, screen } from '@testing-library/react'
import { CardList} from "./cardList"

describe("CardList", () => {
  it("renders correctly", () => {
    const cardArray = [
      {header: "Card 1", body: "This is some body text for number 1", link: '/#/1'},
      {header: "Card 2", body: "This is some body text for number 2", link: '/#/2'},
      {header: "Card 3", body: "This is some body text for number 3", link: '/#/3'},
      {header: "Card 4", body: "This is some body text for number 4", link: '/#/4'},
      {header: "Card 5", body: "This is some body text for number 5", link: '/#/5'},
      {header: "Card 6", body: "This is some body text for number 6", link: '/#/6'},
      {header: "Card 7", body: "This is some body text for number 7", link: '/#/7'},
      {header: "Card 8", body: "This is some body text for number 8", link: '/#/8'},
      {header: "Card 9", body: "This is some body text for number 9", link: '/#/9'}
    ]

    render(<CardList>{cardArray}</CardList>)

    const cardList = screen.getByRole('list')
    expect(cardList).toBeTruthy()
  })
})
