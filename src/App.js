import TodoProvider from './context/TodoContext';

import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Main />
      </TodoProvider>
    </div>
  );
}

export default App;
