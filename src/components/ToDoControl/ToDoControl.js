import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';

export default function ToDoControl() {

    const {active, toDoService} = useContext(ToDoContext);

    const onClickAll = () => {
        toDoService.showAll();
    }
    const onClickC = () => {
        toDoService.showCompleted()
    }

    // 1 - implement delete
    // 2 - clear input when item is added
    // 3 - store your previous list
    const onClickD = () => {
        console.log('asdfas');
    }
    const onClickClear = () => {
        toDoService.clear();
    }

    return (
        <div>
            <button onClick={onClickAll}>all</button>
            <button onClick={onClickC}>completed</button>
            <button onClick={onClickD}>deleted</button>
            <button onClick={onClickClear}>clear</button>
        </div>
    )
}
