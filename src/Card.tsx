export function Card({ todo }: { todo: string }) {
  return (
    <div className="card ">
      <p className="whitespace-pre-wrap">{todo}</p>
    </div>
  );
}
