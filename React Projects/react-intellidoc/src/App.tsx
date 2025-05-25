import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import { TextEditor } from './components/TextEditor/TextEditor';

function App() {
  return (
    <Router>
      <NavBar />
      {/* Other components or Routes */}

      <Hero />

      <TextEditor />
    </Router>
  );
}

export default App;
