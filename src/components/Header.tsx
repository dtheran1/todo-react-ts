import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        Todo
        <img src="https://repository-images.githubusercontent.com/318576591/a7182780-3625-11eb-925d-adc07c4e5e7c" alt="image-ts-react"
        style={{ width: '60px', height: 'auto' }}
        />
      </h1>

      <CreateTodo saveTodo={onAddTodo}/>
    </header>
  )
}
