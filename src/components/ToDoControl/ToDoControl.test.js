import Enzyme, { mount } from 'enzyme';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';

import ToDoControl from './ToDoControl';
import { ToDoContext } from '../../ContextApi';

Enzyme.configure({adapter: new Adapter17()});

// mock the todoModel custom hook
const tdm = {
    todos: [],
    completed: [],
    pending: [],
    showAll: jest.fn(),
    showCompleted: jest.fn(),
    showPending: jest.fn(),
    clear: jest.fn(),
};

describe('render', () => {
    it('should word when the "all" button is clicked', () => {
        const {active, todos, completed, pending, ...toDoService} = tdm;
        const todoControl = mount(
            <ToDoContext.Provider value={{ todos, completed, pending, toDoService}}>
                <ToDoControl></ToDoControl>
            </ToDoContext.Provider>
        );

        todoControl.find('.td-todo-tid-all').simulate('click');
        expect(tdm.showAll).toBeCalledTimes(1);

        todoControl.find('.td-todo-tid-completed').simulate('click');
        expect(tdm.showCompleted).toBeCalledTimes(1);

        todoControl.find('.td-todo-tid-pending').simulate('click');
        expect(tdm.showPending).toBeCalledTimes(1);

        todoControl.find('.td-todo-tid-clear').simulate('click');
        expect(tdm.clear).toBeCalledTimes(1);
    });
});
