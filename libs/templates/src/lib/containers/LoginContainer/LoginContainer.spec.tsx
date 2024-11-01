import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginContainer />);
    expect(baseElement).toBeTruthy();
  });
});
