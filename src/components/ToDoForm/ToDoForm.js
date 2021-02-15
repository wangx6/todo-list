import React, {useState, useContext} from 'react'
import { ToDoContext } from '../../ContextApi';

export default function ToDoForm() {
    const [state, setState] = useState('');
    const {toDoService} = useContext(ToDoContext);


    // controller space
    const onClickAddTodo = (evt) => {
        toDoService.add({todo: state});
    }

    const onChangeTodoInput = (evt) => {
        setState(evt.target.value);
    }

    return (
        <div>
            <input onChange={onChangeTodoInput} defaultValue={state}/>
            <button onClick={onClickAddTodo}>Add</button>
        </div>
    )
}
