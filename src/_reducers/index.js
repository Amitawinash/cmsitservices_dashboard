import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { productReducer } from './product.reducer';
import { ruleReducer } from './rule.reducer';


const rootReducer = combineReducers({
  userReducer,
  productReducer,
  ruleReducer
});

export default rootReducer;