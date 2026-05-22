import { useState } from "react";
import Profile from "./components/Profile";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>memo & useCallback Exercise</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>

      <Profile firstname="Taisei" lastname="Miyazaki" />

      <ProductList />
    </>
  );
}

export default App;
