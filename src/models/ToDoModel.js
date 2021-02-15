import {useState, useEffect} from 'react';

const LS_KEY = 'vhi-todo';

function getFromLS() {
    return JSON.parse(window.localStorage.getItem(LS_KEY));
}

function setToLS(data){
    window.localStorage.setItem(LS_KEY, JSON.stringify(data));
}

/**
 * ToDoModel Model
 * param n/a
 * return {Object} api
 */
function ToDoModel() {
    const [todos, setTodos] = useState(getFromLS() || []);
    const [active, setActive] = useState(todos);
    const [completed, setCompleted] = useState([]);
    const [pending, setPending] = useState([]);

    useEffect(() => {
        setActive(todos);
        setCompleted(todos.filter(t => t.status === 1));
        setPending(todos.filter(t => t.status === 0));
        setToLS(todos);
    }, [todos]);

    /**
     * 
     * param {  }
     * return {  }
     */
    function __createRecord(data) {
        return {
            id: Math.random().toString(32),
            status: 0,
            ...data
        }
    }

    /**
     * 
     * param {  }
     * return {  }
     */
    function add(data) {
        const r = __createRecord(data);
        setTodos([...todos, r]);
    };

    /**
     * 
     * param {  }
     * return {  }
     */
    function remove(id) {
        const tmp = [...todos];
        setTodos(tmp.filter(t => t.id !== id));
    };

    /**
     * 0 - pending tasks
     * 1 - completed
     * param {  }
     * return {  }
     */
    function toggleItemCompleted(id) {
        const temp = [...todos];
        for(let i = 0; i < temp.length; ++i) {
            if(temp[i].id === id) {
                temp[i].status = temp[i].status === 1 ? 0 : 1;
                break;
            }
        }
        setTodos(temp);
    };

    /**
     * 
     * param {  }
     * return {  }
     */
    function clear() {
        setTodos([]);
    }

    /**
     * 
     * param {  }
     * return {  }
     */
    function showAll() {
        setActive(todos);
    }

    /**
     * 
     * param {  }
     * return {  }
     */
    function showCompleted() {
        setActive(completed);
    }

    /**
     * 
     * param {  }
     * return {  }
     */
    function showPending() {
        setActive(pending);
    }

    // api
    return {
        todos, active, completed, pending, 
        add, remove, clear, toggleItemCompleted, showAll, showCompleted, showPending,
    }
}

export default ToDoModel;