import "./App.css";
import Child from "./Component/Child";
import { TransactionProvider } from "./Component/TransContext";
function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
