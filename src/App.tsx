// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPgae';

function App() {
  const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
            <Route path="/" Component={LandingPage} />
                <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/signin" />} />      
                <Route path="/signin" Component={SignInPage} />
                <Route path="/signup" Component={SignUpPage} />
            </Routes>
        </Router>
    );
}

export default App;
