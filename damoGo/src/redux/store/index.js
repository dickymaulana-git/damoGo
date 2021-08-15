import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/combiner'


export let store = createStore(rootReducer,applyMiddleware(ReduxThunk))
