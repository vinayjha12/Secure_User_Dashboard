// App.test.tsx
import React from 'react';
import { render, waitFor,screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders landing page for root route', async () => {

    // Wait for landing page content to appear
    await waitFor(() => {
      expect(screen.queryByText(/Welcome to the landing page/i)).not.toBeInTheDocument();
    });
  });

  test('renders dashboard page for authenticated user', async () => {
    localStorage.setItem('token', 'fakeToken'); // Simulate authenticated user
    // Wait for dashboard page content to appear
    await waitFor(() => {
      expect(screen.queryByText(/Welcome to the dashboard/i)).not.toBeInTheDocument();
    });
  });

  test('redirects to sign-in page for unauthenticated user accessing protected route', async () => {
    localStorage.removeItem('token'); // Simulate unauthenticated user

    const { getByText } = render(
        <App />
    );

    await waitFor(() => {
      expect(screen.queryByText(/Sign in to your account/i)).not.toBeInTheDocument();
    });
  });
});
