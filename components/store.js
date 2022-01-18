
import {createStore} from 'redux';
  
import sampleredux from './redux/reducer';
  
// Passing Reducer to createStore
const store=createStore(sampleredux);
  
export default store;
