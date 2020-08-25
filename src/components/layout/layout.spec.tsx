import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Photo } from 'models/interfaces';
import { Orientation } from 'models/types';
import Layout from './layout';
import { act } from 'react-dom/test-utils';

jest.mock('next/head', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: ({ children }: { children: Array<React.ReactElement> }) => <>{children}</>,
}));
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

  it('renders social meta picture tags if a title photo exists', (): void => {
    const titlePhoto: Photo = {
      name: 'photo',
      album: 'test',
      public_id: 'test/photo',
      format: 'jpg',
      version: '1234',
      created_at: new Date('1982-04-26'),
      width: 1024,
      height: 768,
      tags: ['title'],
      orientation: Orientation.Landscape,
    };
    const { container } = render(
      <Layout titlePhoto={titlePhoto}>
        <p>Test</p>
      </Layout>,
    );

    const ogImageTag = container.querySelector('meta[property="og:image"]');
    const twitterImageTag = container.querySelector('meta[property="og:image"]');

    expect(ogImageTag).toBeTruthy();
    expect(twitterImageTag).toBeTruthy();
  });

  it('does not render social meta picture tags', (): void => {
    const { container } = render(
      <Layout>
        <p>Test</p>
      </Layout>,
    );

    const ogImageTag = container.querySelector('meta[property="og:image"]');
    const twitterImageTag = container.querySelector('meta[property="og:image"]');

    expect(ogImageTag).toBeFalsy();
    expect(twitterImageTag).toBeFalsy();
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
