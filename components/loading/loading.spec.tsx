import React from 'react';
import { render } from '@testing-library/react';
import Loading from './loading';

describe('Loading tests', (): void => {
  it('renders the component', (): void => {
    const wrapper = render(<Loading />);

    expect(wrapper).toBeTruthy();
  });
});
