import { getTodos } from "@/api/todos";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
import { TodoItem } from "@/components/TodoItem";
import { TodoProps } from "@/types";
import { Suspense } from "react";




const Todo = async () => {
  const todos: TodoProps[] = await getTodos();

  return (
    <div>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
};
export default Todo;
