import { useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const { isLoading, data: todos = [] } = useGetTodosQuery();

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4> isLoading: {isLoading ? " true " : "false"}</h4>
      <pre>...</pre>
      <ul>
        {todos.map((e) => (
          <li key={e.title}>
            <strong>{e.completed ? "Done" : "Pending"}</strong>
            {e.title}{" "}
          </li>
        ))}
      </ul>
      <button>Next to do</button>
    </>
  );
};
