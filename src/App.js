import Route from './components/common/Route';
import ProductList from './components/productList/ProductList';
import TodoList1 from './components/todoList1/TodoList1';
import TodoList2 from './components/todoList2/TodoList2';

function App() {
  /**
   * 原本屬於todoList1的內容已經搬遷到 /components/todoList1/TodoList1中。
   * 要完成checkbox list的作業的話，請至 /components/todoList2/TodoList2。
   * 此處不會再新增任何code。
   */
  return (
    <div>
      <ul className="flex">
        <li className="mr-3">
          <a
            className="underline"
            href="/"
          >
            Go to TodoList1
          </a>
        </li>
        <li>
          <a
            className="underline mr-3"
            href="/todoList2"
          >
            Go to TodoList2
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="/productList"
          >
            Go to ProductList
          </a>
        </li>
      </ul>
      <Route path="/">
        <TodoList1 />
      </Route>
      <Route path="/todoList2">
        <TodoList2 />
      </Route>
      <Route path="/productList">
        <ProductList />
      </Route>
    </div>
  );
}

export default App;
