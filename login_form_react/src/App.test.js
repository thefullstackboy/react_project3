import { render, screen } from '@testing-library/react';
import Loginmail from './App';

test('renders learn react link', () => {
  render(<Loginmail />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
