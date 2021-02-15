import React, {useState, useContext} from 'react'
import { ToDoContext } from '../../ContextApi';

export default function ToDoForm() {
    const [state, setState] = useState('');
    const {toDoService} = useContext(ToDoContext);

    // controller space
    const onClickAddTodo = () => {
        if(!state.trim()) return;
        toDoService.add({todo: state});
        setState('');
    }

    const onChangeTodoInput = (evt) => {
        setState(evt.target.value);
    }

    const onKeyUpInput = (evt) => {
        const { keyCode } = evt;
        if(keyCode === 13) {
            onClickAddTodo();
        }
    }

    return (
        <div>
            <input onChange={onChangeTodoInput} onKeyUp={onKeyUpInput} value={state}/>
            <button onClick={onClickAddTodo}>Add</button>
        </div>
    )
}
