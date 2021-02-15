import './App.css';

// Component section
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoControl from './components/ToDoControl/ToDoControl';

// Context section
import {ToDoContext} from './ContextApi';

// model section
import ToDoModel from './models/ToDoModel';

function App() {
  const { active, ...toDoService } = ToDoModel();

  return (
    <div className="App">
      <ToDoContext.Provider value={{active, toDoService}}>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
        <ToDoControl></ToDoControl>
      </ToDoContext.Provider>
    </div>
  );
}

export default App;
