// SignUpPage.test.tsx
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Assuming you're using Redux for state management
import SignUpPage from './SignUpPage';
import store from '../store'; // Your Redux store
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));

describe('SignUpPage', () => {
  test('renders sign-up form', () => {
    render(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Create a new account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/Already have an account/i)).toBeInTheDocument();
  });

  test('navigates to login page', async () => {
    render(
      <Provider store={store}>
        <Router>
          <SignUpPage />
        </Router>
      </Provider>
    );
  
    fireEvent.click(screen.getByText(/Login here/i));
  
    await waitFor(() => {
      expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    });
  });
  
});
