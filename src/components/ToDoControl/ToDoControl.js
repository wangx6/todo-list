import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';
import './ToDoControl.css';

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
        <div className="td-todo-control" data-testid="td-todo-control">
            <VhiButton 
                clsName="td-todo-tid-all" 
                handleClick={onClickAll} 
                text={`All ${todos.length}`}>
            </VhiButton>

            <VhiButton 
                clsName="td-todo-tid-completed" 
                handleClick={onClickCompleted} 
                text={`completed(${completed.length})`}>
            </VhiButton>

            <VhiButton 
                clsName="td-todo-tid-pending" 
                handleClick={onClickPending} 
                text={`Pending(${pending.length})`}>
            </VhiButton>

            <VhiButton 
                clsName="td-todo-tid-clear" 
                handleClick={onClickClear} 
                text="Clear">
            </VhiButton>
        </div>
    )
}
