import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import AccountDetailPage from './components/AccountDetailsPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/account/:type" element={<AccountDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
