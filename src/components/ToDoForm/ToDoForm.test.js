import Enzyme, { mount } from 'enzyme';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import ToDoForm from './ToDoForm';
import { ToDoContext } from '../../ContextApi';

Enzyme.configure({adapter: new Adapter17()});

// mock the todoModel custom hook
const tdm = {
    add: jest.fn(),
};

describe('render', () => {
    it('should invoke todoService.add function when the add button is clicked', () => {
        const {active, todos, completed, pending, ...toDoService} = tdm;
        const todoForm = mount(
            <ToDoContext.Provider value={{active, todos, completed, pending, toDoService}}>
                <ToDoForm></ToDoForm>
            </ToDoContext.Provider>
        );

        const addButton = todoForm.find('.td-todo-form-add');
        addButton.simulate('click');
        expect(tdm.add).toBeCalledTimes(1);
    });

    it('should update the state and update the input value when the value changes', () => {
        const {active, todos, completed, pending, ...toDoService} = tdm;
        const todoForm = mount(
            <ToDoContext.Provider value={{active, todos, completed, pending, toDoService}}>
                <ToDoForm></ToDoForm>
            </ToDoContext.Provider>
        );
        
        const input = todoForm.find('.td-todo-form__text-input');
        input.simulate('change', {target: { value: 'buy a book' }});
        expect(input.instance().value).toEqual('buy a book');
    });

    it('should add the item when the enter key is pressed', () => {
        const {active, todos, completed, pending, ...toDoService} = tdm;
        const todoForm = mount(
            <ToDoContext.Provider value={{active, todos, completed, pending, toDoService}}>
                <ToDoForm></ToDoForm>
            </ToDoContext.Provider>
        );
        
        // simulate the value change
        const input = todoForm.find('.td-todo-form__text-input');
        input.simulate('change', {target: { value: 'buy a book' }});
        expect(input.instance().value).toEqual('buy a book');

        // simulate enter key
        input.simulate('keyup', {keyCode: 13});
        expect(tdm.add).toBeCalledTimes(1);
        expect(input.instance().value).toEqual('');
    });
});
