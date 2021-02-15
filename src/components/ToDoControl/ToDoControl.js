import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';

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
        <div>
            <button onClick={onClickAll}>all{todos.length}</button>
            <button onClick={onClickCompleted}>completed({completed.length})</button>
            <button onClick={onClickPending}>Pending({pending.length})</button>
            <button onClick={onClickClear}>clear</button>
        </div>
    )
}
