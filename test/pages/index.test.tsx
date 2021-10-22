import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Home } from '../../pages/index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText('main.header.button'));
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  });
});
