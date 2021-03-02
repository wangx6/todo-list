import ToDoModel from './ToDoModel';
import Enzyme, { mount } from 'Enzyme';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

jest.mock('axios');

Enzyme.configure({adapter: new Adapter17()});

let tdm;
function wrapper(hook) {
    const FakeComponent = () => {
        tdm = hook();
        return <div>fake element</div>;
    }
    mount(<FakeComponent />);
    return tdm ;
}

describe('unit test for todo model', () => {
    it('should initalize', () => {
        let tdm = wrapper(ToDoModel);
        expect(tdm.todos).toEqual([]);
        expect(tdm.active).toEqual([]);
        expect(tdm.completed).toEqual([]);
        expect(tdm.pending).toEqual([]);
    });

    it('fetchTodosFromApi', (done) => {
        expect.assertions(1);
        const resp = {
            data: {
                ok: true, data: [{id: 'asdfa', todo: 'test todo', status: 1}]
            }
        };
        axios.get.mockResolvedValue(resp);
        console.log(resp);
        tdm.fetchTodosFromApi(true).then((response) => {
            console.log(response);
            expect(response).toEqual(resp.data);
            done();
        }).catch((err) => {
            console.log(err);
            done();
        });
    })

    it('add', () => {
        act(() => {tdm.clear()});
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        act(() => { tdm.add({ todo: 'test-to-do-1' }); });
        expect(tdm.todos.length).toEqual(2);
    });

    it("should not add when todo is invalid", () => {
        // clear all
        act(() => {tdm.clear()});
        expect(tdm.todos.length).toEqual(0);

        act(() => { tdm.add({ todo: '' }); });
        expect(tdm.todos.length).toEqual(0);
    });

    it('remove', () => {
        act(() => {tdm.clear()});

        // add one item
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        expect(tdm.todos.length).toEqual(1);
        let id = tdm.todos[0].id;

        act(() => { tdm.remove(id)});
        expect(tdm.todos.length).toEqual(0);
    });

    it('clear', () => {
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        act(() => { tdm.add({ todo: 'test-to-do-1' }); });
        expect(tdm.todos.length).toBeGreaterThan(0);
        act(() => {tdm.clear()});
        expect(tdm.todos.length).toEqual(0);
    });
    
    it('toggleItemComplete', () => {
        // clear all
        act(() => {tdm.clear()});
        expect(tdm.todos.length).toEqual(0);

        // add 2 list__item__description
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        act(() => { tdm.add({ todo: 'test-to-do-1' }); });

        // get id
        let id = tdm.todos[0].id;

        act(() => { tdm.toggleItemCompleted(id); });
        expect(tdm.todos[0].status).toEqual(1)

        act(() => { tdm.toggleItemCompleted(id); });
        expect(tdm.todos[0].status).toEqual(0)

        id = tdm.todos[1].id;

        act(() => { tdm.toggleItemCompleted(id); });
        expect(tdm.todos[1].status).toEqual(1)

        act(() => { tdm.toggleItemCompleted(id); });
        expect(tdm.todos[1].status).toEqual(0)

    });

    it('showPending', () => {
        // clear all
        act(() => {tdm.clear()});
        expect(tdm.todos.length).toEqual(0);

        // add 2 list__item__description
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        act(() => { tdm.add({ todo: 'test-to-do-1' }); });

        // get id
        let id = tdm.todos[0].id;

        act(() => { tdm.toggleItemCompleted(id); });
        act(() => { tdm.showPending() });
        expect(tdm.active.length).toEqual(1);
    });

    it('showAll', () => {
        // clear all
        act(() => {tdm.clear()});
        expect(tdm.todos.length).toEqual(0);

        // add 2 list__item__description
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        act(() => { tdm.add({ todo: 'test-to-do-1' }); });

        // get id
        let id = tdm.todos[0].id;

        act(() => { tdm.toggleItemCompleted(id); });
        act(() => { tdm.showCompleted() });
        expect(tdm.active.length).toEqual(1);

        act(() => { tdm.showAll() });
        expect(tdm.active.length).toEqual(2);
    });

    it('showComplete', () => {
        // clear all
        act(() => {tdm.clear()});
        expect(tdm.todos.length).toEqual(0);

        // add 2 list__item__description
        act(() => { tdm.add({ todo: 'test-to-do-0' }); });
        act(() => { tdm.add({ todo: 'test-to-do-1' }); });

        // get id
        let id = tdm.todos[0].id;

        act(() => { tdm.toggleItemCompleted(id); });
        act(() => { tdm.showCompleted() });
        expect(tdm.active.length).toEqual(1);
    });
});