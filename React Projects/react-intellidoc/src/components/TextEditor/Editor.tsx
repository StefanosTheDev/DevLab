// EditorPage.tsx
import { useParams } from 'react-router-dom';
import { TextEditor } from './TextEditor';

export function EditorPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Invalid document ID</div>;

  return (
    <TextEditor storageKey={`doc-${id}`} defaultText="Untitled Document" />
  );
}
