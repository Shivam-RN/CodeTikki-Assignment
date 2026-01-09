
import { Trash2 } from "lucide-react";

export default function NoteItem({ note, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-lg mb-1">{note.title}</h3>
          {note.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-2">{note.description}</p>
          )}
          <p className="text-xs text-gray-500">
            {formatDate(note.createdAt)}
          </p>
        </div>
        <button
          onClick={() => onDelete(note.id)}
          className="shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors duration-150"
          aria-label={`Delete note: ${note.title}`}
          title="Delete note"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

