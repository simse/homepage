import { render, screen } from '@testing-library/react'
import SearchBox from '../../components/SearchBox'

describe('SearchBox', () => {
  it('renders a input', () => {
    render(<SearchBox />)

    const searchIinput = screen.getByPlaceholderText('Search')

    expect(searchIinput).toBeInTheDocument()
  })
})