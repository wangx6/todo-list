import './App.css';

import {useState} from 'react';

// Component section
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoControl from './components/ToDoControl/ToDoControl';
import SideMenu from './components/SideMenu/SideMenu';

// Context section
import {ToDoContext} from './ContextApi';

// model section
import ToDoModel from './models/ToDoModel';

function App() {
  const { active, todos, completed, pending, ...toDoService } = ToDoModel();
  const [showSideMenu, setShowSideMenu] = useState({value: false});

  const onClickShowMenu = () => {
    setShowSideMenu({value: true});
  }

  return (
    <div className="App td-app" data-testid="to-do-app">
      <button className="td-btn" onClick={onClickShowMenu}>show side</button>
      <ToDoContext.Provider value={{active, todos, completed, pending, toDoService}}>
        <div className="td-gap-b-20">
          <ToDoControl></ToDoControl>
        </div>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
        <SideMenu vvisible={showSideMenu}></SideMenu>
      </ToDoContext.Provider>
    </div>
  );
}

export default App;



