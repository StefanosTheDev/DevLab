import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import AccountDetailPage from './components/AccountDetailsPage';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="" element={<LoginForm />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/account/:type" element={<AccountDetailPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
