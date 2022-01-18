
import {createStore} from 'redux';
  
import sampleredux from './redux/reducer';
  
// Passing burgerReducer to createStore
const store=createStore(sampleredux);
  
export default store;