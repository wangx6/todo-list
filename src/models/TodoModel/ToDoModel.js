import {useState, useEffect} from 'react';
import axios from 'axios';

const LS_KEY = 'vhi-todo';

function setToLS(data){
    window.localStorage.setItem(LS_KEY, JSON.stringify(data));
}

/**
 * ToDoModel Model
 * param n/a
 * return {Object} api
 */
function ToDoModel() {
    /***********************************/
    // STATE SPACE
    const [todos, setTodos] = useState([]);
    const [active, setActive] = useState(todos);
    const [completed, setCompleted] = useState([]);
    const [pending, setPending] = useState([]);

    useEffect(() => {
        setActive(todos);
        setCompleted(todos.filter(t => t.status === 1));
        setPending(todos.filter(t => t.status === 0));
        setToLS(todos);
    }, [todos]);

    function __createRecord(data) {
        return {
            id: Math.random().toString(32),
            status: 0,
            ...data
        }
    }

    function add(data) {
        if(!validateTodo(data)) return;
        const pdata = __processData(data);
        const r = __createRecord(pdata);
        setTodos([r, ...todos]);
    };

    function __processData(data) {
        const {todo} = data;
        const [td, priority, dateTime] = todo.trim().split('::')
        return {
            todo:td, priority, dateTime
        };
    }

    function toggleItemCompleted(id) {
        const temp = [...todos];
        for(let i = 0; i < temp.length; ++i) {
            if(temp[i].id === id) {
                temp[i].status = temp[i].status === 1 ? 0 : 1;
                return setTodos(temp);
            }
        } 
    };

    function validateTodo(data) { return !!data.todo.trim() }
    
    function remove(id) { setTodos([...todos].filter(t => t.id !== id)) };

    function clear() { setTodos([]) }

    function showAll() { setActive(todos) }

    function showCompleted() { setActive(completed) }

    function showPending() { setActive(pending) }

    async function fetchTodosFromApi (doSetData) {
        const response = await axios.get('http://localhost:8080/todo');
        setTodos(response.data.data);
        return response;
    }

    /***********************************/
    // Api space
    return {
        todos, active, completed, pending, 
        validateTodo,
        add, 
        remove, 
        clear, 
        toggleItemCompleted, 
        showAll, 
        showCompleted, 
        showPending,
        fetchTodosFromApi,
    }
}

export default ToDoModel;
