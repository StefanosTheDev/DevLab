import { useEffect, useRef, useState } from 'react';
import styles from './TextEditor.module.css';

type TextEditorProps = {
  storageKey: string;
  defaultText?: string;
};

export function TextEditor({ storageKey, defaultText = '' }: TextEditorProps) {
  const [text, setText] = useState('');
  const textRef = useRef('');

  // Load saved content
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setText(saved);
      textRef.current = saved;
    } else {
      setText(defaultText);
      textRef.current = defaultText;
    }
  }, [storageKey, defaultText]);

  // Autosave changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== textRef.current) {
        localStorage.setItem(storageKey, text);
        textRef.current = text;
        console.log(`✅ Saved to ${storageKey}`);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [text, storageKey]);

  return (
    <div className={styles.container}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your document..."
        className={styles.inputBox}
      />
    </div>
  );
}
