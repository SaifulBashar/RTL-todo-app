import { FiTrash } from "react-icons/fi";
export function Card({
  todo,
  onDelete,
}: {
  todo: string;
  onDelete?: () => void;
}) {
  return (
    <div className="card hover:bg-gray-600 transition-all items-center flex ease-linear transform hover:scale-105">
      <p className="whitespace-pre-wrap flex-1">{todo}</p>
      <div className="ml-4">
        <button
          onClick={() => (onDelete ? onDelete() : false)}
          className="hover:bg-gray-500 rounded-full p-2"
        >
          <FiTrash size={25} />
        </button>
      </div>
    </div>
  );
}
