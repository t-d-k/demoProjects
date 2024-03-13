import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('renders items', () => {
  render(<ItemList />);
  const linkElement = screen.getByText(/Montblanc/i);
  expect(linkElement).toBeInTheDocument();
});