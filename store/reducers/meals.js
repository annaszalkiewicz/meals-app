import { MEALS } from '../../data/meals-db';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  return state;
}

export default mealsReducer;