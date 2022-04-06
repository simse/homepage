import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

const sampleConfig = {
    general: {
        title: 'Welcome to next.js!',
        locale: 'en-US'
    },
    search: {
        provider: 'duckduckgo',
        enabled: true
    },
    links: []
}

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home config={sampleConfig} />)

    const heading = screen.getByRole('heading', {
      name: /Good evening, Simon/i,
    })

    expect(heading).toBeInTheDocument()
  })
})