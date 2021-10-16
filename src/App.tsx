import { Card } from "./Card";
import { Input } from "./Input";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center flex-col">
      <div style={{ width: 600 }} className="mt-16">
        <h1 className="text-center">TODO</h1>
        <br />
        <Input />
        <br />
        <Card />
      </div>
    </div>
  );
}

export default App;
