import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  test('renders welcome message and logout button', () => {
    render(
      <Router>
        <DashboardPage />
      </Router>
    );

    expect(screen.getByText(/Welcome to Dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument();
  });

  test('calls handleLogout function on logout button click', () => {
    const mockNavigate = jest.fn();
    const mockClear = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: { clear: mockClear },
      writable: true,
    });
  
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));
  
    render(
      <Router>
        <DashboardPage />
      </Router>
    );
  
    fireEvent.click(screen.getByRole('button', { name: /Logout/i }));
    
    console.log(mockNavigate.mock.calls); // Log calls to mockNavigate
    console.log(mockClear.mock.calls); // Log calls to mockClear
  
    expect(mockClear).toHaveBeenCalled(); // Ensure localStorage is cleared
    expect(mockNavigate).toHaveBeenCalledWith('/signin'); 
  });
  
});
