import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

const Providers = ({ children }): ReactElement => {
  return children as ReactElement;
};

const customRender = (ui: ReactElement, options = {}): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
