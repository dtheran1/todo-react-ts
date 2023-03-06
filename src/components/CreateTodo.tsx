import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      className='new-todo'
      value={inputValue}
      type="text"
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      placeholder='Que queres hacer?'
      autoFocus
      />
    </form>
  )
}
