import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardPage from './pages/DashboardPage';
import AccountPage from './components/AccountPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/account/:type" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
