import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';
import   ToDoControlStyle from './ToDoControl.module.css';

import VhiButton from '../VhiButton/VhiButton';

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
        <div className={ ToDoControlStyle.todoControl } data-testid="td-todo-control">
            <VhiButton 
                clsName={ `td-todo-tid-all ${ToDoControlStyle.todoTidAll}` } 
                handleClick={onClickAll} 
                text={`${todos.length}`}>
            </VhiButton>

            <VhiButton 
                clsName="td-todo-tid-completed" 
                handleClick={onClickCompleted} 
                text={`C(${completed.length})`}>
            </VhiButton>

            <VhiButton 
                clsName="td-todo-tid-pending" 
                handleClick={onClickPending} 
                text={`P(${pending.length})`}>
            </VhiButton>

            <VhiButton 
                clsName="td-todo-tid-clear" 
                handleClick={onClickClear} 
                text="Clear">
            </VhiButton>
        </div>
    )
}
