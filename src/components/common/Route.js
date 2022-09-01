/**
 * 這個Route component的邏輯:
 * 當window.location.pathname跟path prop一樣時，才會return children
 *
 * for example:
 *  當url為 http://localhost:3000/todoList2時，pathname會是"/todoList2"。
 *  此時只有path="/todoList2"的route component會顯示出來
 *  <Route path="/todoList1">
 *    <TodoList1 />
 *  </Route>
 *  <Route path="/todoList2">
 *    <TodoList2 />
 *  </Route>
 *
 * 依據pathname來控制元件顯示邏輯是一個很常用到的方法。
 */

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
