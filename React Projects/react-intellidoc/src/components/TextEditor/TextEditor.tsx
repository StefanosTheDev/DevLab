import { useEffect, useRef, useState } from 'react';
import styles from './TextEditor.module.css';

type TextEditorProps = {
  storageKey: string;
  defaultText?: string;
};
// Object Across Standard
/** This is the object that is saved in localStorage */
type StoredDocument = {
  content: string;
  lastUpdatedAt: number;
};

export function TextEditor({ storageKey, defaultText = '' }: TextEditorProps) {
  const [text, setText] = useState('');
  const textRef = useRef('');
  const [showSaved, setShowSaved] = useState(false);

  // Load saved content
  // What we here is just a useEffect for saving the text loading it with that ID.
  // Check to make sure the ID exists in Local storage.
  // And simply render all Available ID's.

  // Load Saved Content.

  useEffect(() => {
    const saved: StoredDocument = JSON.parse(
      localStorage.getItem(storageKey) || '{}'
    );
  }, [storageKey, defaultText]);

  // Autosave changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== textRef.current) {
        localStorage.setItem(storageKey, text);
        textRef.current = text;
        setShowSaved(true); // Show Saved Message
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [text, storageKey]);

  return (
    <>
      {showSaved && <h1>Text is Saved</h1>}

      <div className={styles.container}>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setShowSaved(false); // as soon as we start typing hide any saved message
          }}
          placeholder="Start typing your document..."
          className={styles.inputBox}
        />
      </div>
    </>
  );
}
