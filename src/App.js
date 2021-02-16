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
  const { active, todos, completed, pending, ...toDoService } = ToDoModel();

  return (
    <div className="App">
      <ToDoContext.Provider value={{active, todos, completed, pending, toDoService}}>
        <div className="td-gap-b-20">
          <ToDoControl></ToDoControl>
        </div>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
      </ToDoContext.Provider>
    </div>
  );
}

export default App;



