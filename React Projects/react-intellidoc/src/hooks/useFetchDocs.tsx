import { useEffect, useState } from 'react';
type DocPreview = {
  id: string;
  content: string;
};
const [docs, setDocs] = useState<DocPreview[]>([]);

useEffect(() => {
  const allDocs: DocPreview[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('doc-')) {
      const content = localStorage.getItem(key) || '';
      allDocs.push({
        id: key.replace('doc-', ''),
        content: content.slice(0, 100),
      });
    }
  }

  setDocs(allDocs);
}, []);
