import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should create', () => {
  const { getByText } = render(<App />);
  const message = getByText(/App is running!/i);
  expect(message).toBeInTheDocument();
});
