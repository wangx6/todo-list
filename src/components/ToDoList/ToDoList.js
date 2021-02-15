import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';

export default function ToDoList() {
    const {active, toDoService} = useContext(ToDoContext);

    // controller space
    function onClickItemComplete(id) {
        toDoService.toggleItemCompleted(id);
    }

    function onClickItemDel(id) {
        toDoService.remove(id);
    }

    // view space
    return (
        <div>
            {active.map(l => <div key={l.id}>
                <div className="td-form-list">
                    <div className="td-form-list__item" key={l.id}>{l.todo}</div>
                    <div>{l.status}</div>
                    <button onClick={() => {onClickItemComplete(l.id)}} className="td-form-list__item__complete-btn">complete</button>
                    <button onClick={() => {onClickItemDel(l.id)}} className="to-form-list__item__del-btn">del</button>
                </div>
            </div>)}
        </div>
    )
}
