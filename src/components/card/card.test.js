import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from "./card"
import { navigate } from 'gatsby';


describe("Card", () => {

  it("renders correctly", () => {
    //const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { focus } });
    render(<Card header="Card title" link="./#"/>)

    const card = screen.getByRole('listItem')
    expect(card).toBeTruthy()
  })

  it('navigates away when click', async () => {
    render(<Card header="Card title" link="./#"/>)
    const card = screen.getByTestId('mainCard')

    fireEvent.mouseDown(card);
    fireEvent.mouseUp(card);
    expect(navigate).toHaveBeenCalledTimes(1)
  })
})
