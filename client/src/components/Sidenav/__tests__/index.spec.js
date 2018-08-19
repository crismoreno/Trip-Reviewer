import React from 'react';
import { create } from 'react-test-renderer';
 
import Sidenav from './../../Sidenav';

jest.mock('react-simple-sidenav', () => 'ReactSideNav');
jest.mock('./../../../containers/SidenavItem', () => 'SidenavItem');

const mockComponent = props => {
    return (
        <Sidenav {...props} />
    );
};
 
describe('<Sidenav />', () => {
    it('should render component', () => {
        const props = {
            onHideNav: () => {}
        }
        const tree = create(mockComponent(props)).toJSON();
        
        expect(tree).toMatchSnapshot();
    });
});