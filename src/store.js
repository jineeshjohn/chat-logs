import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';

import { handleActions } from 'redux-actions';
import promiseMiddleware from 'redux-promise-middleware';

const initialState = { 
  members: [],
  messages: [],
  chatlog: [],
}


const messageReducer =  handleActions({ 
  ['MESSAGES_LOADING_FULFILLED']: (state, action) =>   { 
    return   action.payload;
  }
}, initialState.messages);

const memberReducer = handleActions({ 
  ['MEMBERS_LOADING_FULFILLED']: (state, action) =>    { 
    return   action.payload;
  }
}, initialState.members);

const formatReducer = handleActions({ 
  ['FORMAT_DATA']: (state, action) =>    { 
    return  ' action.payload';
  }
}, initialState.chatlog);




const mainReducer = combineReducers({
  members: memberReducer,
  messages: messageReducer,
  chatlog: formatReducer,
});


export const store = createStore(mainReducer, {}, applyMiddleware(
  promiseMiddleware()
));
