import { render, screen } from '@testing-library/react'
import Input from './input'

describe('Input Component', () => {
  it('renders a heading', () => {
    render(<Input label='Test' name='test' data-testid='input-test' />)

    const input = screen.getByTestId('input-test')

    expect(input).toBeInTheDocument()
  })
})
