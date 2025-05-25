import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import AppRouter from './components/AppRouter/AppRouter';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
