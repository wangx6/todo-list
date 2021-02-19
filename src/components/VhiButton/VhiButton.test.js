import Enzyme, { mount } from 'Enzyme';
import VhiButton from './VhiButton';
import Adapter17 from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter17()});


describe('feature', () => {
    it('should init with proper text passed via props', () => {
        const button = mount(<VhiButton text={'submit now'}></VhiButton>);
        const props = button.props();
        expect(props.text).toEqual('submit now');
    })

    it('should call the input onclick callback if the button is clicked', () => {
        const handleClick = jest.fn();
        const button = mount(<VhiButton
            handleClick={handleClick} 
            text={'submit now'}
        ></VhiButton>);
        const props = button.props();
        expect(props.text).toEqual('submit now');

        button.find('button').simulate('click');
        expect(handleClick).toBeCalledTimes(1);
    })
})


