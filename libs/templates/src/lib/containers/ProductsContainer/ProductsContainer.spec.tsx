import { render } from '@testing-library/react';

import ProductsContainer from './ProductsContainer';

describe('ProductsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
