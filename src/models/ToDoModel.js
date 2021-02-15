import {useState, useEffect} from 'react';

function ToDoModel() {
    const [todos, setTodos] = useState([]);
    const [active, setActive] = useState(todos);

    useEffect(() => {
        setActive(todos);
    }, [todos]);

    function __createRecord(data) {
        return {
            id: Math.random().toString(32),
            status: 0,
            ...data
        }
    }

    // power
    function add(data) {
        const r = __createRecord(data);
        console.log(r);
        setTodos([...todos, r]);
    };

    function remove(id) {
        const tmp = [...todos];
        setActive(tmp.filter(t => t.id !== id));
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

    function clear() {
        setTodos([]);
    }

    function showAll() {
        setActive(todos);
    }

    function showCompleted() {
        const tmp = [...todos];
        console.log(tmp);
        setActive(tmp.filter(t => t.status === 1));
    }

    // api
    return {
        active, add, remove, clear, toggleItemCompleted, showAll, showCompleted
    }
}

export default ToDoModel;