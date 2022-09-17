import { v4 as uuid } from 'uuid';

export const reducer = (state, action) => {
  const { payload } = action;
  const { id, message } = payload;
  switch (action.type) {
    case 'CREATE':
      return [...state, { id: uuid(), message: message, isCompleted: false }];
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
