import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders postsif request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }],
    });

    render(<Async />);

    const elements = await screen.findAllByRole('listitem', {}, {});

    expect(elements).not.toHaveLength(0);
  });
});
