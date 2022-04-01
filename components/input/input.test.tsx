import { render, screen } from '@testing-library/react'
import Input from './input'

describe('Input Component', () => {
  it('renders an input field', () => {
    render(<Input label='Test' name='test' data-testid='input-test' />)

    const input = screen.getByTestId('input-test')

    expect(input).toBeInTheDocument()
  })

  it('should render an error message', () => {
    render(<Input error={{ type: 'required', message: 'Required' }} label='Test' name='test' />)

    const input = screen.getByTestId('test-error')

    expect(input).toBeInTheDocument()
  })
})
