import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

type DocPreview = {
  id: string;
  content: string;
};

export function DocDashboard() {
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

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Documents</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Preview</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.content}</td>
              <td>
                <Link to={`/doc/${doc.id}`} className={styles.link}>
                  Open
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
