import { v4 as uuid } from 'uuid';

export const reducer = (state, action) => {
  const { payload } = action;
  const { id, message, list } = payload;
  switch (action.type) {
    case 'UPDATE_LIST':
      return [...list];
    case 'CREATE':
      return [...state, { id: id, message: message, isCompleted: false }];
    case 'UPDATE':
      const newTodoList = [...state];
      const updateIndex = newTodoList.findIndex((item) => item.id === id);
      newTodoList[updateIndex].message = message;
      return newTodoList;
    case 'DELETE':
      const newList = [...state];
      const deleteIndex = newList.findIndex((item) => item.id === id);
      newList.splice(deleteIndex, 1);
      return newList;

    default:
      return state;
  }
};
