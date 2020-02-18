import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapetr from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapetr()});
describe('<NavigationItems /> test 1', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render three <NavigationItem /> elements if authenticate', () => {
        // wrapper = shallow(<NavigationItems authenticated />);
        wrapper.setProps({authenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should have have an exact Logout button', () => {
        wrapper.setProps({authenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});

// describe('<NavigationItems /> test 2', () => {
// });