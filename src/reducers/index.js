import {ADD_REMINDER} from '../constants'

const reminder = (action) =>{
  return {
    text: action.text,
    id: Math.random()
  }
}


const reminders = (state = [], action) => {
  let remind = null;
  switch (action.type) {
    case ADD_REMINDER:
        remind = [...state, reminder(action)]
      return remind;
    default:
      return state;
  }
}

export default reminders;
