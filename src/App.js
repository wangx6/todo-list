import './App.css';

import {useState} from 'react';

// Component section
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoControl from './components/ToDoControl/ToDoControl';
import SideMenu from './components/SideMenu/SideMenu';
import { FaBars, FaBell } from 'react-icons/fa';

// Context section
import { ToDoContext } from './ContextApi';

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
      <div className="td-header">
        <FaBell className="td-header__menu-bell"></FaBell>
        <h1>To do</h1>
        <FaBars className="td-header__menu-icon" onClick={onClickShowMenu}></FaBars>
      </div>
        <ToDoContext.Provider value={{active, todos, completed, pending, toDoService}}>
            <div className="td-gap-b-30">
            <ToDoControl></ToDoControl>
            </div>
            <div className="td-gap-b-20">
            <ToDoForm></ToDoForm>
            </div>
            <ToDoList></ToDoList>
            <SideMenu vvisible={showSideMenu}></SideMenu>
        </ToDoContext.Provider>
    </div>
  );
}

export default App;



