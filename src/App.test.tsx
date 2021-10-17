import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Test full todo", () => {
  function renderTodo() {
    render(<App />);
    return {
      inputField: screen.getByRole("textbox"),
      getTodos() {
        return screen.getAllByTestId("todo_list").map((item) => ({
          name: within(item).getByTestId("name").textContent,
          deleteButton: within(item).getByText("Delete"),
        }));
      },
    };
  }
});
