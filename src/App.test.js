import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the WORD MASTER title', () => {
  render(<App />)
  const title = screen.getByText(/TSÀSE I MÓ DÉ SËN/i)
  expect(title).toBeInTheDocument()
})
