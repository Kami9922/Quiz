import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { testReducer } from './reducers/test-reducer'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
	test: testReducer,
	// test: testReducer,
	// users: usersReducer,
	// post: postReducer,
	// posts: postsReducer,
})

export const store = createStore(
	reducer,
	composeEnchancers(applyMiddleware(thunk))
)
