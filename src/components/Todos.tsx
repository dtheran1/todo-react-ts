import { type TodoId, type Todo as ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos[]
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<ListOfTodos, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggleCompleteTodo={onToggleCompleteTodo}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}