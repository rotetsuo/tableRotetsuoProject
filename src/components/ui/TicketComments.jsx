import { useState } from "react";

export default function TicketComments({ comments = [], onAddComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAdd = () => {
    const trimmed = newComment.trim();
    if (!trimmed) return;
    onAddComment(trimmed);
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Comentários:</h3>
      <div className="space-y-1 mb-4">
        {comments.length > 0 ? (
          comments.map((comment, idx) => (
            <p key={idx} className="text-sm text-gray-700 dark:text-gray-200">• {comment}</p>
          ))
        ) : (
          <p className="text-sm text-gray-500">Nenhum comentário ainda.</p>
        )}
      </div>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        rows={3}
        placeholder="Escreva um comentário..."
      />
      <button
        onClick={handleAdd}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Adicionar
      </button>
    </div>
  );
}