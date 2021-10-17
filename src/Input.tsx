import { useState } from "react";

export function Input({ setTodo }: { setTodo: (item: string) => void }) {
  const [text, setText] = useState("");
  return (
    <div>
      <label htmlFor="username" className="hidden">
        Username
      </label>
      <input
        id="username"
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter" && text.trim().length) {
            setTodo(text);
            setText("");
          }
        }}
        value={text}
        className="w-full px-8 py-9 text-2xl rounded-lg bg-gray-800"
      />
    </div>
  );
}
