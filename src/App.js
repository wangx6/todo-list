import './App.css';

// Component section
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoControl from './components/ToDoControl/ToDoControl';
import ToDoModal from './components/ToDoModal/ToDoModal';

// Context section
import {ToDoContext} from './ContextApi';

// model section
import ToDoModel from './models/ToDoModel';

// Test commit

function App() {
  const { active, todos, completed, pending, modal, ...toDoService } = ToDoModel();

  return (
    <div className="App">
      <ToDoContext.Provider value={{active, todos, completed, pending, modal, toDoService}}>
        <div className="td-gap-b-20">
          <ToDoControl></ToDoControl>
        </div>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
        <ToDoModal></ToDoModal>
      </ToDoContext.Provider>
    </div>
  );
}

export default App;



