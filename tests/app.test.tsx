import { render, screen, } from '@testing-library/react';
import App from '../src/App';


test('should render hello', () => {
    render(<App />);
    const h1 = screen.getByRole('heading', { name: 'hello' });
    expect(h1).toBeInTheDocument();
  });