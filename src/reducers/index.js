import {ADD_REMINDER, DELETE_REMINDER} from '../constants'

export const addReminder = (action) =>{
  let {text, dueDate} = action
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeById = (state = [], id) =>{
  return state.filter((reminder) => reminder.id !== id)
}


const reminders = (state = [], action) => {
  let remind = null;
  switch (action.type) {
    case ADD_REMINDER:
        remind = [...state, addReminder(action)]
      return remind;
    case DELETE_REMINDER:
      return removeById(state, action.id);
    default:
      return state;


  }
}

export default reminders;
