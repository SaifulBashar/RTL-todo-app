import { useState } from "react";

export function Input() {
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
        value={text}
        className="w-full px-8 py-9 text-2xl rounded-lg bg-gray-800"
      />
    </div>
  );
}
