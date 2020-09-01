import { combineReducers } from 'redux';

const selectedRadioReducer = (selectedradioValue = null, action) => {
    if (action.type === 'SELECTED_RADIOVALUE') {
        return action.payload;
    }
    return selectedradioValue;
};

export default combineReducers({
    selectedradioValue: selectedRadioReducer
});