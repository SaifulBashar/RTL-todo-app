import { Card } from "./Card";
import { Input } from "./Input";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState<{ id: string; todo: string }[]>([]);
  const handleDelete = (id: string) => () => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center flex-col">
      <div style={{ width: 600 }} className="mt-16">
        <h1 className="text-center">TODO</h1>
        <br />
        <Input
          setTodo={(item) =>
            setTodoList((prevTodos) => [
              ...prevTodos,
              { id: uuidv4(), todo: item },
            ])
          }
        />
        <br />
        <ul>
          {todoList.map((item) => (
            <li key={item.id} className="mb-4" data-testid="todo_list">
              <Card todo={item.todo} onDelete={handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
