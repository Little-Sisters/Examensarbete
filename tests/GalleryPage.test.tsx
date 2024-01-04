import { render, screen } from '@testing-library/react';
import GalleryPage from '../src/pages/GalleryPage';

describe('GalleryPage', () => {
  test('renders GalleryPage component', () => {
    render(<GalleryPage />);
    const headingElement = screen.getByRole('heading', {
      name: 'Gallery Page',
    });
    expect(headingElement).toBeInTheDocument();
  });
});
