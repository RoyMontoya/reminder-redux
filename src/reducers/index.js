import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

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
  state = read_cookie('reminders')
  switch (action.type) {
    case ADD_REMINDER:
        remind = [...state, addReminder(action)]
        bake_cookie('reminders', remind)
      return remind;
    case DELETE_REMINDER:
      remind = removeById(state, action.id);
      bake_cookie('reminders', remind)
      return remind
    case CLEAR_REMINDERS:
     remind = []
     bake_cookie('reminders', remind)
     return remind;
    default:
      return state;


  }
}

export default reminders;
