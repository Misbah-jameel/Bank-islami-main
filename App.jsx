import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Notifaction from './pages/Notifaction';
import Profile from './pages/Profile';
import Deposit from './pages/Deposit';
import Withdrawal from './pages/Withdrawal';
import Progress from './pages/Progress';
import Invest from './pages/Invest';
import Dashboard from './pages/Dashboard';
import ErrorBoundary from  './pages/ErrorBoundary'
import Transfer from './pages/Transfer';
import Referral from './pages/Referral';
import Invite from './pages/Invite'; 

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="px-[3%] bg-white sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifaction" element={<Notifaction />} />
                <Route path="/invite" element={<Invite />} />
          <Route path="/invite/:refId" element={<Invite />} />

          {/* 🔒 Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/deposit"
            element={
              <ProtectedRoute>
                <Deposit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/withdrawal"
            element={
              <ProtectedRoute>
                <Withdrawal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transfer"
            element={
              <ProtectedRoute>
                <Transfer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invest"
            element={
              <ProtectedRoute>
                <Invest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                  <ErrorBoundary>
                <Dashboard/>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/referral"
            element={
              <ProtectedRoute>
                <Referral />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

// 🔒 Protected Route Wrapper
const ProtectedRoute = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

export default App;
