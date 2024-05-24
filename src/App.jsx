import { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import exampleData from "./exdata";

function App() {
  const [data, setData] = useState(exampleData);
  return (
    <>
      <Editor data={data} setData={setData} />
    </>
  );
}

export default App;
