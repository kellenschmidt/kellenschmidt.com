import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

export default store;
