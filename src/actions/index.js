import {ADD_REMINDER, DELETE_REMINDER} from '../constants'

export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text, 
    dueDate
  }
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting actions', action);
  return action;
}
