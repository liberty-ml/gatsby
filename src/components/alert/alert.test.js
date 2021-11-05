import { render, screen } from '@testing-library/react'
import Styleguide from '../../pages/styleguide'

describe("Alert", () => {
  it("renders correctly", () => {
    render(<Styleguide />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument();
  })
})
