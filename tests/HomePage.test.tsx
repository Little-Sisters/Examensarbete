import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/HomePage';

describe('HomePage', () => {
  test('renders HomePage component', () => {
    render(<HomePage />);
    const headingElement = screen.getByRole('heading', { name: 'HomePage' });
    expect(headingElement).toBeInTheDocument();
  });
});
