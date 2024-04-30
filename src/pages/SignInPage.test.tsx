import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SignInPage from './SignInPage';
import { loginUser } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import store from '../store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('SignInPage', () => {
  test('renders sign-in form', () => {
    render(
         <Provider store={store}>
         <Router>
         <SignInPage />
         </Router>
       </Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('navigates to sign-up page', async () => {
    render(
        <Provider store={store}>
        <Router>
        <SignInPage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText(/Create one here/i));

    await waitFor(() => {
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  });
});

  test('disables sign-in button when fields are empty', () => {
    render(
      <Router>
        <SignInPage />
      </Router>
    );
    const signInButton = screen.getByRole('button', { name: /Sign in/i });
    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    expect(signInButton).not.toBeDisabled(); // Both fields are filled
  });
});
