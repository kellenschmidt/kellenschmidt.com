import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as responsiveReducer } from 'react-responsive-redux'

const reducers = {
  // ... your other reducers here ...
  responsive: responsiveReducer
}

const reducer = combineReducers(reducers)

export function initializeStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
