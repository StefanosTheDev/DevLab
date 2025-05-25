import { useEffect, useRef, useState } from 'react';
import styles from './TextEditor.module.css';

export function TextEditor() {
  const [text, setText] = useState('');
  const textRef = useRef(''); // Tracks the last saved value

  // 1. Load saved content on first mount
  useEffect(() => {
    const saved = localStorage.getItem('autosaved-text');

    if (saved) {
      setText(saved);
      textRef.current = saved;
    } else {
      const defaultText = 'In the ancient land of Eldoria, ...';
      setText(defaultText);
      textRef.current = defaultText;
    }
  }, []);

  // 2. Save to localStorage only when text changes from the last saved
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== textRef.current) {
        localStorage.setItem('autosaved-text', text);
        textRef.current = text;
        console.log('✅ Text saved to localStorage');
      }
    }, 1000); // debounce 1 second

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className={styles.container}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="In the ancient land of Eldoria, where the skies were painted with shades of mystic hues and the forests whispered secrets of old..."
        className={styles.inputBox}
      />
    </div>
  );
}
