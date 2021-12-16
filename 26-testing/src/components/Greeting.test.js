import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World', () => {
    // Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('hello world!', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const element = screen.getByText('good to see you', { exact: false });
    expect(element).toBeInTheDocument();
  });

  test('rendes Changed! if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const element = screen.getByText('changed', { exact: false });
    expect(element).toBeInTheDocument();
  });

  test('does not render good to see you if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const element = screen.queryByText('good to see', { exact: false });
    expect(element).toBeNull();
  });
});
