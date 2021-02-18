import React, { useState, useContext } from 'react'
import { ToDoContext } from '../../ContextApi';
import './ToDoModal.css';
import c from "classnames";

export default function ToDoModal() {

    //const [modalActive, setModalActive] = useState(false);

    const {modal, toDoService} = useContext(ToDoContext);

    return (
        <div>
            <div className={`td-modal ${modal ? "td-modal-right" : "td-modal-hidden"}`}>
                <button className="td-modal-close" onClick={() => toDoService.hideModal()}>X</button>
            </div>
        </div>
    )
}


