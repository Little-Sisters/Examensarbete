import { render, screen } from '@testing-library/react';
import App from '../src/App';

//This is an example test to see that the testing works
//Remove this test when you start writing your own tests
test('should render hello', () => {
  render(<App />);
  const h1 = screen.getByRole('heading', { name: 'hello' });
  expect(h1).toBeInTheDocument();
});
