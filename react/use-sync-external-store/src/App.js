import './App.css';
import { useLocalStorage } from './hook/useLocalStorage';
import { useLocalSyncStorage } from './hook/useLocalSyncStorage';

const generateRandom = () => Math.random().toString(36).substring(7);

const Counter1 = () => {
  const [_random, setRandom] = useLocalSyncStorage("random-1");
  return (
    <div style={{ border: "1px solid white", borderRadius: "2px", textAlign: "center", padding: "24px" }}>
      <p>Component A</p>
      <p>Random: {_random.value}</p>
      <button onClick={() => setRandom({ value: generateRandom() })}>Update local storage</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter1 />
      <Counter1 />
    </div>
  );
}

export default App;
