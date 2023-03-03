import shortid from 'shortid';
//selectors
export const getAllCategories = (state) => state.categories;
// export const getCategoryById = ({ categories }, id) =>
//   categories.find((category) => category.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_CATEGORY = createActionName('REMOVE_CATEGORY');
const ADD_CATEGORY = createActionName('ADD_CATEGORY');
// const EDIT_CATEGORY = createActionName('EDIT_CATEGORY');

// action creators
export const removeCategpry = (payload) => ({ type: REMOVE_CATEGORY, payload });
export const addCategory = (payload) => ({ type: ADD_CATEGORY, payload });
// export const editCategory = (payload) => ({ type: EDIT_CATEGORY, payload });

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_CATEGORY:
        return statePart.filter((category) => category.id !== action.payload);
    case ADD_CATEGORY:
      return [...statePart, { ...action.payload, id: shortid() }];
      // case EDIT_CATEGORY:
      // return statePart.map(post => (post.id === action.payload.id ? 
      //   { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default categoriesReducer;