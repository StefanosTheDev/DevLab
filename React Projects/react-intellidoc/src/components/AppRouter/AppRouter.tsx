// AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { DocDashboard } from '../Dashboard/Dashboard';
import { TextEditor } from '../TextEditor/TextEditor';
import { EditorPage } from '../TextEditor/Editor';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/dashboard" element={<DocDashboard />} />
      <Route path="/doc/:id" element={<EditorPage />} />
      <Route path="/editor" element={<TextEditor storageKey="temp" />} />
    </Routes>
  );
}
export default AppRouter;
