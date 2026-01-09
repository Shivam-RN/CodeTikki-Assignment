import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAdd({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString()
    });

    setTitle("");
    setDescription("");
    setError("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="note-title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="note-title"
            type="text"
            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter note title"
            value={title}
            onChange={handleTitleChange}
          />
          {error && (
            <p id="title-error" className="text-red-600 text-sm mt-1.5">
              {error}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="note-description" className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <textarea
            id="note-description"
            className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
            placeholder="Add additional details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        <button
          type="submit"
          disabled={!title.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
        >
          Add Note
        </button>
      </div>
    </form>
  );
}