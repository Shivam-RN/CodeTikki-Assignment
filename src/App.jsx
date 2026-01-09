import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Spinner from "./components/Loader";
import EmptyState from "./components/EmptyState";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const addNote = (note) => {
    setNotes((prev) => [note,...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="w-full max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Notes Management App</h1>
          <p className="text-gray-700">Keep track of your thoughts and ideas</p>
        </header>

        <NoteForm onAdd={addNote} />

        {loading && <Spinner />}

        {!loading && notes.length === 0 && <EmptyState />}

        {!loading && notes.length > 0 && (
          <NoteList notes={notes} onDelete={deleteNote} />
        )}
      </div>
    </div>
  );
}