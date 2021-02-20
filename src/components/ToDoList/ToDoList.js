import React, {useContext} from 'react'
import { ToDoContext } from '../../ContextApi';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import './ToDoList.css'

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
        <div className="td-form-list">
            {active.map(l => <div key={l.id}>
                <div className="td-form-list-p">
                    <div className="td-form-list-s">
                        <div className={`td-form-list__item ${l.status === 1 ? 'done' : ''}`}>
                            <FaCheckCircle 
                                onClick={() => {onClickItemComplete(l.id)}} 
                                className={`td-btn td-gat-r-10 td-form-list__item__complete-btn ${l.status === 1 ? 'done' : ''}`}>
                            </FaCheckCircle>
                            <div className={`td-form-list__item__description ${l.status === 1 ? 'done' : ''}`} key={l.id}>{l.todo}</div>
                            <div className={`td-form-list__item__p ${l.priority}`}>{l.priority}</div>
                            <div>{l.dateTime}</div>
                            
                            <div>
                                
                                
                                <FaTrashAlt
                                    onClick={() => {onClickItemDel(l.id)}} 
                                    className="td-btn to-form-list__item__del-btn"
                                ></FaTrashAlt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
