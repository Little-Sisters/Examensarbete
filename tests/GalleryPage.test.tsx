// import { render, screen } from '@testing-library/react';
// import GalleryPage from '../src/pages/GalleryPage';
// import BentoGrid from '../src/components/BentoGrid';
// import { CellData, data } from '../data/cellData';

// // Tests for Gallery Page
// // describe('GalleryPage', () => {
// //   test('renders GalleryPage component', () => {
// //     render(<GalleryPage />);
// //     const headingElement = screen.getByRole('heading', {
// //       name: 'Gallery',
// //     });
// //     expect(headingElement).toBeInTheDocument();
// //   });
// // });
// //
// // Tests for Bento Grid, rendered on Gallery Page
// describe('BentoGrid Component', () => {
//   it('renders component', () => {
//     render(<BentoGrid />);
//     expect(screen.getByTestId('bento-grid')).toBeInTheDocument();
//   });

//   it('renders the correct number of cells', () => {
//     const { container } = render(<BentoGrid />);
//     data.forEach((item) => {
//       const cell = container.querySelector(`[data-id='${item.id}']`);
//       expect(cell).toBeInTheDocument();
//     });
//   });

//   it('displays correct information in each cell', () => {
//     render(<BentoGrid />);
//     data.forEach((item: CellData) => {
//       const matchingElements = screen.getAllByText(item.title);
//       expect(matchingElements.length).toBeGreaterThan(0);
//     });
//   });
// });
