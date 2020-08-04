import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Layout from './layout';
import { act } from 'react-dom/test-utils';

jest.mock('next/link', () => ({ children }) => children);
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: 'test/path',
    query: {
      publicId: 'test-publicId',
      slug: 'test-slug',
    },
  }),
}));

describe('Layout tests', (): void => {
  it('renders the component', (): void => {
    expect(render(<Layout />)).toBeTruthy();
  });

  it('renders children', (): void => {
    const wrapper = render(
      <Layout>
        <p>Test</p>
      </Layout>,
    );
    const { container } = wrapper;
    const test = container.querySelector('p');

    expect(test).toBeTruthy();
    expect(wrapper.getByText('Test')).toBeTruthy();
  });

  it('prevents body scroll when navigation is revealed', async (): Promise<void> => {
    const wrapper = render(<Layout />);
    const { container } = wrapper;
    const button = container.querySelector('button');

    act((): void => {
      fireEvent.click(button);
    });
    await expect(document.body.style.overflow).toEqual('hidden');

    act((): void => {
      fireEvent.click(button);
    });
    await expect(document.body.style.overflow).toEqual('auto');
  });

  it('enables body scroll on navigation', async (): Promise<void> => {
    const wrapper = render(<Layout />);
    const { container, getByTestId } = wrapper;
    const button = container.querySelector('button');
    const link = getByTestId('events');

    act((): void => {
      fireEvent.click(button);
    });
    await expect(document.body.style.overflow).toEqual('hidden');

    act((): void => {
      fireEvent.click(link);
    });
    await expect(document.body.style.overflow).toEqual('auto');
  });
});
