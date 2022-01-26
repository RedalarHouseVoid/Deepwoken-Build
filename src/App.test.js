import { render, screen } from '@testing-library/react';
import PageTitle from './App';


test('renders learn react link', () => {
  render(<PageTitle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
