import Header from './Header';
import { screen, render } from '@testing-library/react';

describe('<Header />', () => {
  test('render header', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  test('Render store logo', () => {
    render(<Header />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
  test('Contains search bar', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
  test('Contains shopping cart button', () => {
    render(<Header />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
