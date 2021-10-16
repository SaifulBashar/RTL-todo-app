import { render, screen } from "@testing-library/react";
import { Input } from "./Input";
import userEvent from "@testing-library/user-event";

test("Type todo input field", () => {
  render(<Input />);
  const element = screen.getByRole("textbox", {
    name: /username/i,
  });
  userEvent.type(element, "hello");
  expect(element.value).toBe("hello");
});
