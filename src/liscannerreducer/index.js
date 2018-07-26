import { combineReducers } from "redux";
import ItemReady from './itemreadyqtyreducer';

const allReducers = combineReducers({
    ItemReady : ItemReady
});

export default allReducers;
