import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';
import './ToDoControl.css';

export default function ToDoControl() {
    const {todos, completed, pending, toDoService} = useContext(ToDoContext);

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
        <div className="td-todo-control" data-testid="td-todo-control">
            <button className="td-btn" onClick={onClickAll}>all{todos.length}</button>
            <button className="td-btn" onClick={onClickCompleted}>completed({completed.length})</button>
            <button className="td-btn" onClick={onClickPending}>Pending({pending.length})</button>
            <button className="td-btn" onClick={onClickClear}>clear</button>
        </div>
    )
}
