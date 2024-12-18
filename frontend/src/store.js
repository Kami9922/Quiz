import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { testReducer } from './reducers/test-reducer'
import { mainReducer } from './reducers/main-reducer'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
	test: testReducer,
	main: mainReducer,
	// users: usersReducer,
	// post: postReducer,
	// posts: postsReducer,
})

export const store = createStore(
	reducer,
	composeEnchancers(applyMiddleware(thunk))
)
