import { useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function App() {
  const [note, setNote] = useLocalStorage('note', '');
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      console.log('Auto-saved:', note);
      localStorage.setItem('note', JSON.stringify(note));
    }, 1000); // auto-save after 1s of no typing
  }, [note]);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>📝 Smart Notes</h2>
      <textarea
        ref={inputRef}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={10}
        style={{ width: '100%', fontSize: '1.1rem' }}
      />
      <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
        Auto-saves after 1 second of inactivity.
      </p>
    </div>
  );
}
