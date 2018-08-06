import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
    getTrips,
    getTripWithReviewer,
    getUserReviews,
    getTrip,
    updateTrip,
    deleteTrip,
    clearTrip,
    clearTripWithReviewer,
    loginUser,
    auth,
    addTrip,
    clearNewTrip,
    getUsers,
    userRegister
} from './../index';
import {
    GET_TRIPS,
    GET_USERS,
    GET_TRIP_W_REVIEWER,
    CLEAR_TRIP_W_REVIEWER,
    USER_REGISTER,
    USER_LOGIN,
    USER_AUTH,
    ADD_TRIP,
    UPDATE_TRIP,
    DELETE_TRIP,
    GET_TRIP,
    CLEAR_NEW_TRIP,
    CLEAR_TRIP,
    GET_USER_REVIEWS
} from './../../constants/action-names';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Testing async actions', () => {
    beforeEach(() => {
        moxios.install();
    });
    
    afterEach(() => {
        moxios.uninstall();
    });

    describe('getTrips', () => {
        it('has the correct type and payload for the default request', () => {
            const responceMock = [ 'test' ];
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: GET_TRIPS, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(getTrips()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('has the correct type and payload for a provided list', () => {
            const list = [ '1', '2', '3' ];
            const responceMock = [ 'test' ];
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
            const expectedPayload = ['1', '2', '3', 'test'];
    
            const expectedActions = [
                { type: GET_TRIPS, payload: expectedPayload },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(getTrips(10, 0, 'asc', list)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('getTripWithReviewer', () => {
        it('has the correct type and payload', () => {
            const id = 'test';
            const firstResponceMock = {
                ownerId: 'ownerId'
            };
            const secondResponceMock = 'test';
            moxios.stubRequest(`/api/getTrip?id=${id}`, {
                status: 200,
                response: firstResponceMock
            });
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: secondResponceMock,
                });
            });
    
            const expectedActions = [
                { 
                    type: GET_TRIP_W_REVIEWER, 
                    payload: {
                        trip: firstResponceMock,
                        reviewer: secondResponceMock
                    }
                },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(getTripWithReviewer(id)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('getUserReviews', () => {
        it('has the correct type and payload', () => {
            const userId = 'userId';
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: GET_USER_REVIEWS, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(getUserReviews(userId)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('getTrip', () => {
        it('has the correct type and payload', () => {
            const id = 'id';
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: GET_TRIP, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(getTrip(id)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('updateTrip', () => {
        it('has the correct type and payload', () => {
            const data = 'data';
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: UPDATE_TRIP, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(updateTrip(data)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('deleteTrip', () => {
        it('has the correct type and payload', () => {
            const id = 'id';
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: DELETE_TRIP, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(deleteTrip(id)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('loginUser', () => {
        it('has the correct type and payload', () => {
            const input = {
                email: 'email',
                password: 'password'
            };
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: USER_LOGIN, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(loginUser(input)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('auth', () => {
        it('has the correct type and payload', () => {
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: USER_AUTH, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(auth()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('addTrip', () => {
        it('has the correct type and payload', () => {
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: ADD_TRIP, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(addTrip()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe('getUsers', () => {
        it('has the correct type and payload', () => {
            const responceMock = 'test';
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: GET_USERS, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(getUsers()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
    
    describe('userRegister', () => {
        it('has the correct type and payload', () => {
            const responceMock = { success: true };
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                  status: 200,
                  response: responceMock,
                });
            });
    
            const expectedActions = [
                { type: USER_REGISTER, payload: responceMock },
            ];
    
            const store = mockStore({});
            
            return store.dispatch(userRegister()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});

describe('Testing simple actions', () => {
    describe('clearTrip', () => {
        it('has the correct type', () => {
            const action = clearTrip();
            const expected = CLEAR_TRIP;
    
            expect(action.type).toEqual(expected);
        });
    
        it('has the correct payload', () => {
            const action = clearTrip();
            const expected = {
                trip: null,
                updateTrip: false,
                postDeleted: false
            };
    
            expect(action.payload).toEqual(expected);
        });
    });
    
    describe('clearTripWithReviewer', () => {
        it('has the correct type', () => {
            const action = clearTripWithReviewer();
            const expected = CLEAR_TRIP_W_REVIEWER;
    
            expect(action.type).toEqual(expected);
        });
    
        it('has the correct payload', () => {
            const action = clearTripWithReviewer();
            const expected = {
                trip: null,
                reviewer: null
            };
    
            expect(action.payload).toEqual(expected);
        });
    });

    describe('clearNewTrip', () => {
        it('has the correct type', () => {
            const action = clearNewTrip();
            const expected = CLEAR_NEW_TRIP;
    
            expect(action.type).toEqual(expected);
        });
    
        it('has the correct payload', () => {
            const action = clearNewTrip();
            const expected = null;
    
            expect(action.payload).toEqual(expected);
        });
    });
});