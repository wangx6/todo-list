import React, {useState, useContext} from 'react'
import { ToDoContext } from '../../ContextApi';
import './ToDoForm.css';

export default function ToDoForm() {
    const [state, setState] = useState('');
    const {toDoService} = useContext(ToDoContext);

    // controller space
    const onClickAddTodo = () => {
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
        <div className="td-todo-form">
            <input 
                className="td-text-input td-todo-form__text-input" 
                onChange={onChangeTodoInput} 
                placeholder="What is your plan? :)"
                onKeyUp={onKeyUpInput} value={state}/>
            <button className="td-btn td-todo-form-add" onClick={onClickAddTodo}>+</button>
        </div>
    )
}
