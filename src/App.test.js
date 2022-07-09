import { render, screen } from '@testing-library/react';
import App from './App';

test('Just random testing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome To Influencer Management Portal/);
  expect(linkElement).toBeInTheDocument();
});
