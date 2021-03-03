import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";

// Component section
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoControl from "./components/ToDoControl/ToDoControl";
import CarInsuranceForm from "./components/FullForm/FullForm";
import SideMenu from "./components/SideMenu/SideMenu";
import { FaBars, FaBell } from "react-icons/fa";

import FullForm from './components/FullForm/FullForm.jsx';
import QuickForm from './components/QuickForm/QuickForm.jsx';

// Context section
import { ToDoContext } from "./ContextApi";

// model section
import ToDoModel from "./models/TodoModel/ToDoModel";
import FormService from "./models/FormModel/FormModel";

function App() {
    const { active, todos, completed, pending, ...toDoService } = ToDoModel();
    const [showSideMenu, setShowSideMenu] = useState({ value: false });

    const formService = FormService();

    const onClickShowMenu = () => {
        setShowSideMenu({ value: true });
    };

    const onClick2People = () => {
        formService.addForm('quickForm');
    }

    const onClickSubmit = () => {
        formService.validate();
    }

    return (
        <div className="App td-app" data-testid="to-do-app">
        <div className="td-header">
            <FaBell className="td-header__menu-bell"></FaBell>
            <h1>To do</h1>
            <FaBars
            className="td-header__menu-icon"
            onClick={onClickShowMenu}
            ></FaBars>
        </div>
        <ToDoContext.Provider
            value={{ active, todos, completed, pending, toDoService }}
        >
            {formService.fullForms.map(fullFormRecord => <div key={fullFormRecord.id}>
                <FullForm formRecord={fullFormRecord}></FullForm>
            </div>)}

            {formService.quickForms.map(quickFormRecord => <div key={quickFormRecord.id}>
                <QuickForm formRecord={quickFormRecord}></QuickForm>
            </div>)}

            <button onClick={onClick2People}>2 People</button>
            <button onClick={onClickSubmit}>Submit</button>
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
