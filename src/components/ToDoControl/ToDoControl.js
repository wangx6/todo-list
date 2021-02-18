import React, {useState, useContext} from 'react'
import { ToDoContext } from '../../ContextApi';
import './ToDoControl.css';
import logo from './vhi-logo.png';

export default function ToDoControl() {
    const {todos, completed, pending, toDoService} = useContext(ToDoContext);
    
    const [displayModal, setDisplayModal] = useState(false);

    // controller space
    const onClickAll = () => {
        toDoService.showAll();
    }
    const onClickCompleted = () => {
        toDoService.showCompleted()
    }
    const onClickPending = () => {
        toDoService.showPending();
    }
    const onClickClear = () => {
        toDoService.clear();
    }

    // view space
    return (
        <div className="td-todo-control">
            <button className="td-btn" onClick={onClickAll}>all{todos.length}</button>
            <button className="td-btn" onClick={onClickCompleted}>completed({completed.length})</button>
            <button className="td-btn" onClick={onClickPending}>Pending({pending.length})</button>
            <button className="td-btn" onClick={onClickClear}>clear</button>
            <button className="td-logo" onClick={() => setDisplayModal(!displayModal)}><img src={logo} alt="Logo" /></button>
              <div className={`Overlay ${displayModal ? 'Show' : ''}`} >Slide modal content
                  <button className="Close" onClick={() => setDisplayModal(!displayModal)}>X</button>
              </div>
        </div>
    )
}
