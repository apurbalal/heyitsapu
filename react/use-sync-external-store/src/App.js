import './App.css';
import { useLocalStorage } from './hook/useLocalStorage';
// import { useLocalSyncStorage } from './hook/useLocalSyncStorage';

const generateRandom = () => Math.random().toString(36).substring(7);

const Counter1 = () => {
  const [random, setRandom] = useLocalStorage("random-1");
  return (
    <div>
      <p>{JSON.stringify(random)}</p>
      <button onClick={() => setRandom({ value: generateRandom() })}>Increment</button>
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
