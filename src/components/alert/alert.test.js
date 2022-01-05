import React, {
   useState as useStateMock
} from 'react';
import { render, screen, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Alert } from "./alert"

describe("Alert", () => {
  const showAlert = jest.fn();

  //beforeEach(() => {
  //   useStateMock.mockImplementation(init => [init, setInnerShow]);
  //});

  it("renders correctly", () => {
    render(<Alert type={'success'} showAlert={true} text={'testing success'} />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeTruthy()
  })

  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  it('Closes popup after 3 seconds', async () => {

    expect(countSetTimeoutCalls()).toHaveLength(1);
    await expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000)

    //jest.useFakeTimers();
    //jest.useFakeTimers('legacy');

    //const popup = await waitFor(() =>
    //const alert = screen.getByRole('alert')
    //expect(alert).toBeTruthy()
    //);

    //await waitFor(() => {
      //expect(alert).not.toBeInTheDocument(); // this passes

    //  expect(setTimeout).toHaveBeenCalledTimes(1);
    //  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    //});
  });

  function countSetTimeoutCalls() {
    return setTimeout.mock.calls.filter(([fn, t]) => (
      t !== 0 ||
      !String(fn).includes('_flushCallback')
    ));
  }
})

/*
const setInnerShow = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState')
useStateSpy.mockImplementation((innerShow) => [innerShow, setInnerShow]);

expect(countSetTimeoutCalls()).toHaveLength(1);
expect(setTimeout.mock.calls[1][0]).toHaveBeenLastCalledWith(expect.any(setInnerShow), 1000);

const alert = screen.queryByText('testing success')
expect(alert).not.toBeInTheDocument()
*/
