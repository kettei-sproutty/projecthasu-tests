import { render, screen } from '@testing-library/react'
import Button from './button'

describe('Button Component', () => {
  it('renders a button', () => {
    render(<Button data-testid='button-test'>Button</Button>)

    const button = screen.getByTestId('button-test')

    expect(button).toBeInTheDocument()
  })
})
