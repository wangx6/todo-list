import Enzyme, { mount } from 'Enzyme';
import VhiButton from './VhiButton';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter17()});


describe('feature', () => {
    it('should init with proper text passed via props', () => {
        const button = mount(<VhiButton text={'submit now'}></VhiButton>);
        const props = button.props();
        expect(props.text).toEqual('submit now');
        expect(button.text()).toEqual('submit now');

        const mock = jest.fn((a, b) => { 
            console.log(a, b); 
            return a + b;
        });
        
        mock
            .mockReturnValueOnce(9999)
            .mockReturnValue(200);
        mock(111, 222);
        mock(1)
        console.log(mock.mock.calls);
        console.log(mock.mock.results);

    })

    it('should call the input onclick callback if the button is clicked', () => {
        const handleClick = jest.fn();
        const button = mount(<VhiButton
            handleClick={handleClick} 
            text={'submit now'}
        ></VhiButton>);

        button.find('button').simulate('click');
        expect(handleClick).toBeCalledTimes(1);
    })

    it('should not call if the handleClick is not a function', () => {
        const button = mount(<VhiButton
            handleClick={0} 
            text={'submit now'}
        ></VhiButton>);

        button.find('button').simulate('click');
    })
});
